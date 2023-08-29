import { BinaryDataWriter, BinaryDataReader } from '@hetwan/io';

declare abstract class DofusMessage {
    _id: number;
    constructor(id: number);
    abstract serialize(_: BinaryDataWriter): void;
    abstract deserialize(_: BinaryDataReader): void;
    get id(): number;
}

declare class NetworkMessage {
    static readonly BIT_RIGHT_SHIFT_LEN_PACKET_ID = 2;
    static readonly BIT_MASK = 3;
    static readonly PACKET_METADATA_LENGTH = 7;
    static encode(message: DofusMessage): Buffer;
    static decode(data: Buffer): {
        messageId: number;
        instanceId: number;
        messageLength: number;
        messageReader: BinaryDataReader;
    };
    private static computeTypeLength;
    private static subComputeStaticHeader;
    private static getPacketLength;
}

export { DofusMessage, NetworkMessage };
