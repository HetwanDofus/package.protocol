"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  DofusMessage: () => DofusMessage,
  NetworkMessage: () => NetworkMessage
});
module.exports = __toCommonJS(src_exports);

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
var import_ts_pattern = require("ts-pattern");
var import_hetwan = require("@hetwan.io");
var NetworkMessage = class _NetworkMessage {
  static BIT_RIGHT_SHIFT_LEN_PACKET_ID = 2;
  static BIT_MASK = 3;
  static PACKET_METADATA_LENGTH = 7;
  static encode(message) {
    const messageWriter = new import_hetwan.BigEndianWriter();
    message.serialize(messageWriter);
    const wrapperWriter = new import_hetwan.BigEndianWriter(
      Buffer.allocUnsafe(
        messageWriter.getPointer() + _NetworkMessage.PACKET_METADATA_LENGTH
      )
    );
    const type = this.computeTypeLength(messageWriter.getPointer());
    wrapperWriter.writeUShort(this.subComputeStaticHeader(message.id, type));
    wrapperWriter.writeUInt(1);
    (0, import_ts_pattern.match)(type).with(1, () => wrapperWriter.writeByte(messageWriter.getPointer())).with(2, () => wrapperWriter.writeShort(messageWriter.getPointer())).with(3, () => {
      wrapperWriter.writeByte(messageWriter.getPointer() >> 16 & 255);
      wrapperWriter.writeShort(messageWriter.getPointer() & 65535);
    }).otherwise(() => {
      throw new Error("Invalid type");
    });
    wrapperWriter.writeBuffer(messageWriter.getBuffer());
    return wrapperWriter.getBuffer();
  }
  static decode(data) {
    const reader = new import_hetwan.BigEndianReader(data);
    const messageHeader = reader.readUShort();
    const messageId = messageHeader >> 2;
    const typeLength = messageHeader & 3;
    const instanceId = reader.readUInt();
    const messageLength = _NetworkMessage.getPacketLength(
      reader,
      typeLength
    );
    const messageReader = new import_hetwan.BigEndianReader(
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
    return (0, import_ts_pattern.match)(length).with(
      import_ts_pattern.P.when((l) => l > 65535),
      () => 3
    ).with(
      import_ts_pattern.P.when((l) => l > 255),
      () => 2
    ).with(
      import_ts_pattern.P.when((l) => l > 0),
      () => 1
    ).otherwise(() => 0);
  }
  static subComputeStaticHeader(id, typeLength) {
    return id << _NetworkMessage.BIT_RIGHT_SHIFT_LEN_PACKET_ID | typeLength;
  }
  static getPacketLength(reader, length) {
    return (0, import_ts_pattern.match)(length).with(1, () => reader.readByte()).with(2, () => reader.readUShort()).with(3, () => {
      return ((reader.readByte() & 255) << 16) + ((reader.readByte() & 255) << 8) + (reader.readByte() & 255);
    }).otherwise(() => {
      throw new Error("Packet too long");
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DofusMessage,
  NetworkMessage
});
