// src/dofus-message.ts
var DofusMessage = class {
  _id;
  constructor(id) {
    this._id = id;
  }
  get id() {
    return this._id;
  }
};

// src/network-message.ts
import { P, match } from "ts-pattern";
import {
  BigEndianReader,
  BigEndianWriter
} from "@hetwan.io";
var NetworkMessage = class _NetworkMessage {
  static BIT_RIGHT_SHIFT_LEN_PACKET_ID = 2;
  static BIT_MASK = 3;
  static PACKET_METADATA_LENGTH = 7;
  static encode(message) {
    const messageWriter = new BigEndianWriter();
    message.serialize(messageWriter);
    const wrapperWriter = new BigEndianWriter(
      Buffer.allocUnsafe(
        messageWriter.getPointer() + _NetworkMessage.PACKET_METADATA_LENGTH
      )
    );
    const type = this.computeTypeLength(messageWriter.getPointer());
    wrapperWriter.writeUShort(this.subComputeStaticHeader(message.id, type));
    wrapperWriter.writeUInt(1);
    match(type).with(1, () => wrapperWriter.writeByte(messageWriter.getPointer())).with(2, () => wrapperWriter.writeShort(messageWriter.getPointer())).with(3, () => {
      wrapperWriter.writeByte(messageWriter.getPointer() >> 16 & 255);
      wrapperWriter.writeShort(messageWriter.getPointer() & 65535);
    }).otherwise(() => {
      throw new Error("Invalid type");
    });
    wrapperWriter.writeBuffer(messageWriter.getBuffer());
    return wrapperWriter.getBuffer();
  }
  static decode(data) {
    const reader = new BigEndianReader(data);
    const messageHeader = reader.readUShort();
    const messageId = messageHeader >> 2;
    const typeLength = messageHeader & 3;
    const instanceId = reader.readUInt();
    const messageLength = _NetworkMessage.getPacketLength(
      reader,
      typeLength
    );
    const messageReader = new BigEndianReader(
      data.subarray(reader.getPointer(), reader.getPointer() + messageLength)
    );
    return {
      messageId,
      instanceId,
      messageLength,
      messageReader
    };
  }
  static computeTypeLength(length) {
    return match(length).with(
      P.when((l) => l > 65535),
      () => 3
    ).with(
      P.when((l) => l > 255),
      () => 2
    ).with(
      P.when((l) => l > 0),
      () => 1
    ).otherwise(() => 0);
  }
  static subComputeStaticHeader(id, typeLength) {
    return id << _NetworkMessage.BIT_RIGHT_SHIFT_LEN_PACKET_ID | typeLength;
  }
  static getPacketLength(reader, length) {
    return match(length).with(1, () => reader.readByte()).with(2, () => reader.readUShort()).with(3, () => {
      return ((reader.readByte() & 255) << 16) + ((reader.readByte() & 255) << 8) + (reader.readByte() & 255);
    }).otherwise(() => {
      throw new Error("Packet too long");
    });
  }
};
export {
  DofusMessage,
  NetworkMessage
};
