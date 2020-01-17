import { Packet } from '../../packet';
import { PacketType } from '../../packet-type';
import { Reader } from '../../reader';
import { Writer } from '../../writer';

/**
 * Received to give the player information about their stats.
 */
export class ClientStatPacket implements Packet {

  type = PacketType.CLIENTSTAT;
  propagate = true;

  //#region packet-specific members
  /**
   * The name of the stat.
   */
  name: string;
  /**
   * The value of the stat.
   */
  value: number;
  //#endregion

  read(reader: Reader): void {
    this.name = reader.readString();
    this.value = reader.readInt32();
  }

  write(writer: Writer): void {
    writer.writeString(this.name);
    writer.writeInt32(this.value);
  }
}
