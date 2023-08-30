import type { BinaryDataReader, BinaryDataWriter } from "@hetwan.io";

export default abstract class DofusMessage {
  _id: number;

  constructor(id: number) {
    this._id = id;
  }

  abstract serialize(_: BinaryDataWriter): void;
  abstract deserialize(_: BinaryDataReader): void;

  get id(): number {
    return this._id;
  }
}
