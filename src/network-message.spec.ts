import { describe, expect, test } from "bun:test";

import NetworkMessage from "@hetwan/protocol/network-message";
import {
  BasicPingMessage,
  ProtocolRequired,
  HelloConnectMessage,
} from "@hetwan/protocol";

describe("NetworkMessage", () => {
  test("deserialize", () => {
    const message = new BasicPingMessage(true);
    const wrapperBuffer = NetworkMessage.encode(message, 1);
    const result = NetworkMessage.decode(wrapperBuffer);

    expect(result.messageId).toEqual(BasicPingMessage.id);

    // Force value to be wrong
    message.quiet = false;

    message.deserialize(result.messageReader);

    // If value has been changed, it means that the message has been deserialized
    expect(message.quiet).toEqual(true);
    expect(result.messageReader.getRemaining()).toBe(0);
  });

  test("deserialize 2", () => {
    const message = new ProtocolRequired("123");
    const wrapperBuffer = NetworkMessage.encode(message, 1);
    const result = NetworkMessage.decode(wrapperBuffer);

    expect(result.messageId).toEqual(ProtocolRequired.id);

    // Force value to be wrong
    message.version = undefined;

    message.deserialize(result.messageReader);

    // If value has been changed, it means that the message has been deserialized
    expect(message.version).toEqual("123");
    expect(result.messageReader.getRemaining()).toBe(0);
  });

  test("deserialize 3", () => {
    const message = new HelloConnectMessage([0, 1, 2, 3], "test");
    const wrapperBuffer = NetworkMessage.encode(message, 1);
    const result = NetworkMessage.decode(wrapperBuffer);

    expect(result.messageId).toEqual(HelloConnectMessage.id);

    message.deserialize(result.messageReader);

    expect(message.key).toEqual([0, 1, 2, 3]);
    expect(message.salt).toEqual("test");
    expect(result.messageReader.getRemaining()).toBe(0);
  });
});
