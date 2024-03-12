import { Expose, Type } from "class-transformer";
import { CharacterClass } from "./character-class";
import { HabilityPoints } from "../models/attribute";

export class Sheet {
  @Expose()
  public name: string;

  @Type(() => CharacterClass, {
    discriminator: { property: "__type", subTypes: [] },
  })
  public classes: CharacterClass[];

  public baseAttributes: HabilityPoints;
}
