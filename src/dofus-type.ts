import { BinaryDataReader, BinaryDataWriter } from "@hetwan.io";

export default class DofusType {
  public static id: number;
  public id: number;

  constructor() {
    this.id = (this.constructor as unknown as Record<string, unknown>)
      .id as number;
  }

  public serialize(_: BinaryDataWriter): void {
    throw "Serializing empty type";
  }

  public deserialize(_: BinaryDataReader): void {
    throw "Deserializing empty type";
  }
}
