import { describe, expect, test } from "bun:test";

import type { BinaryDataReader, BinaryDataWriter } from "@hetwan.io";

import NetworkMessage from "@hetwan/protocol/network-message";
import DofusMessage from "@hetwan/protocol/dofus-message";
import {BasicPingMessage} from '@hetwan/protocol';

describe("NetworkMessage", () => {
  test("deserialize", () => {
    const message = new BasicPingMessage(true);
    const wrapperBuffer = NetworkMessage.encode(message);
    const result = NetworkMessage.decode(wrapperBuffer);

    expect(result.messageId).toEqual(BasicPingMessage.id);

    // Force value to be wrong
    message.quiet = false;

    message.deserialize(result.messageReader);

    // If value has been changed, it means that the message has been deserialized
    expect(message.quiet).toEqual(true);
    expect(result.messageReader.getRemaining()).toBe(0);
  });
});
