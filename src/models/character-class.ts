import { Expose, Type } from "class-transformer";
import { ClassLevel, RogueLevel } from "./levels";
import { Level01Rogue } from "./levels/rogue/level-01";

export abstract class CharacterClass {
  public abstract get name(): string;
  public abstract levels: ClassLevel[];
}

export class Rogue extends CharacterClass {
  @Expose()
  @Type(() => RogueLevel, {
    discriminator: {
      property: "__type",
      subTypes: [{ value: Level01Rogue, name: "rogue_01" }],
    },
  })
  public levels: RogueLevel[];

  @Expose()
  public get name(): string {
    return "Ladino";
  }
}
