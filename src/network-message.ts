import { P, match } from "ts-pattern";

import {
  BigEndianReader,
  BigEndianWriter,
  type BinaryDataReader,
} from "@hetwan.io";

import DofusMessage from "@hetwan/protocol/dofus-message";

export default class NetworkMessage {
  static readonly BIT_RIGHT_SHIFT_LEN_PACKET_ID = 2;
  static readonly BIT_MASK = 3;
  static readonly PACKET_METADATA_LENGTH = 20;

  static encode(message: DofusMessage, instanceId?: number): Buffer {
    const messageWriter = new BigEndianWriter();
    message.serialize(messageWriter);

    const wrapperWriter = new BigEndianWriter(
      Buffer.allocUnsafe(
        messageWriter.getPointer() + NetworkMessage.PACKET_METADATA_LENGTH
      )
    );

    const type: number = this.computeTypeLength(messageWriter.getPointer());

    wrapperWriter.writeShort(this.subComputeStaticHeader(message.id, type));

    // For tests purposes
    if (instanceId) {
      wrapperWriter.writeUInt(instanceId);
    }

    match(type)
      .with(1, () => wrapperWriter.writeByte(messageWriter.getPointer()))
      .with(2, () => wrapperWriter.writeShort(messageWriter.getPointer()))
      .with(3, () => {
        wrapperWriter.writeByte((messageWriter.getPointer() >> 16) & 255);
        wrapperWriter.writeShort(messageWriter.getPointer() & 65535);
      })
      .otherwise(() => {
        throw new Error("Invalid type");
      });

    wrapperWriter.writeBuffer(messageWriter.getBuffer());

    return wrapperWriter.getBuffer();
  }

  static decode(data: Buffer): {
    messageId: number;
    instanceId: number;
    messageLength: number;
    messageReader: BinaryDataReader;
  } {
    const reader = new BigEndianReader(data);
    const messageHeader: number = reader.readShort();

    const messageId: number = messageHeader >> 2;
    const typeLength: number = messageHeader & 3;

    const instanceId: number = reader.readUInt();

    const messageLength: number = NetworkMessage.getPacketLength(
      reader,
      typeLength
    );

    const messageReader: BigEndianReader = new BigEndianReader(
      data.subarray(reader.getPointer(), reader.getPointer() + messageLength)
    );

    return {
      messageId,
      instanceId,
      messageLength,
      messageReader,
    };
  }

  private static computeTypeLength(length: number): number {
    return match(length)
      .with(
        P.when((l) => l > 65535),
        () => 3
      )
      .with(
        P.when((l) => l > 255),
        () => 2
      )
      .with(
        P.when((l) => l > 0),
        () => 1
      )
      .otherwise(() => 0);
  }

  private static subComputeStaticHeader(
    id: number,
    typeLength: number
  ): number {
    return (id << NetworkMessage.BIT_RIGHT_SHIFT_LEN_PACKET_ID) | typeLength;
  }

  private static getPacketLength(
    reader: BinaryDataReader,
    length: number
  ): number {
    return match(length)
      .with(1, () => reader.readByte())
      .with(2, () => reader.readUShort())
      .with(3, () => {
        return (
          ((reader.readByte() & 255) << 16) +
          ((reader.readByte() & 255) << 8) +
          (reader.readByte() & 255)
        );
      })
      .otherwise(() => {
        throw new Error("Packet too long");
      });
  }
}
