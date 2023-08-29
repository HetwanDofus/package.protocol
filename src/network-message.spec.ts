import { describe, expect, test } from "bun:test";

import type { BinaryDataReader, BinaryDataWriter } from "@hetwan/io";

import NetworkMessage from "@hetwan/protocol/network-message";
import DofusMessage from "@hetwan/protocol/dofus-message";

describe("NetworkMessage", () => {
  const message = new (class TestMessage extends DofusMessage {
    public value: number = 0;

    constructor() {
      super(10);
    }

    serialize(writer: BinaryDataWriter) {
      writer.writeByte(1);
      writer.writeUInt(1);
    }

    deserialize(reader: BinaryDataReader) {
      this.value = reader.readByte();
      reader.readUInt();
    }
  })();

  test("deserialize", () => {
    const wrapperBuffer = NetworkMessage.encode(message);
    const result = NetworkMessage.decode(wrapperBuffer);

    expect(result.messageId).toEqual(10);

    // Force value to be wrong
    message.value = 999;

    message.deserialize(result.messageReader);

    // If value has been changed, it means that the message has been deserialized
    expect(message.value).toEqual(1);
    expect(result.messageReader.getRemaining()).toBe(0);
  });
});
