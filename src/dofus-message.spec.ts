import { describe, expect, test } from "bun:test";

import {
  BigEndianReader,
  BigEndianWriter,
  type BinaryDataReader,
  type BinaryDataWriter,
} from "@hetwan.io";

import { DofusMessage } from "@hetwan/protocol";

describe("DofusMessage", () => {
  const message = new (class Test extends DofusMessage {
    public static id: number = 10;
    
    public value: number = 0;

    constructor() {
      super();
    }

    serialize(writer: BinaryDataWriter) {
      writer.writeByte(1);
    }

    deserialize(reader: BinaryDataReader) {
      this.value = reader.readByte();
    }
  })();

  test("id", () => {
    expect(message.id).toEqual(10);
  });

  test("serialize", () => {
    expect(message.serialize).toBeDefined();
    expect(message.serialize).toBeInstanceOf(Function);

    const writer = new BigEndianWriter();
    message.serialize(writer);

    expect(writer.getBuffer()).toEqual(Buffer.from([1]));
  });

  test("deserialize", () => {
    expect(message.deserialize).toBeDefined();
    expect(message.deserialize).toBeInstanceOf(Function);

    const reader = new BigEndianReader(Buffer.from([1]));

    message.deserialize(reader);

    expect(message.value).toEqual(1);
  });
});
