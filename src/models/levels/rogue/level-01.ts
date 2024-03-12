import { Exclude } from "class-transformer";
import { RogueLevel } from "../../levels";

export class Level01Rogue extends RogueLevel {
  @Exclude()
  public get order(): number {
    return 1;
  }
}
