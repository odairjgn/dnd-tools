import { Expose, Exclude } from "class-transformer";
import { BonusPoints, HabilityModifier } from "./interfaces";

export class HabilityPoints {
  @Expose({ name: "str" })
  public strengthBase: number;

  @Expose({ name: "dex" })
  public dexterityBase: number;

  @Expose({ name: "con" })
  public constitutionBase: number;

  @Expose({ name: "int" })
  public intelligenceBase: number;

  @Expose({ name: "wis" })
  public wisdomBase: number;

  @Expose({ name: "cha" })
  public charismaBase: number;

  @Exclude()
  public modifiers: HabilityModifier[];

  @Exclude()
  public get strength(): number {
    return (
      this.strengthBase +
      this.modifiers.map((m) => m.strength).reduce((a, b) => a + b)
    );
  }

  @Exclude()
  public get dexterity(): number {
    return (
      this.dexterityBase +
      this.modifiers.map((m) => m.dexterity).reduce((a, b) => a + b)
    );
  }

  @Exclude()
  public get constitution(): number {
    return (
      this.constitutionBase +
      this.modifiers.map((m) => m.constitution).reduce((a, b) => a + b)
    );
  }

  @Exclude()
  public get intelligence(): number {
    return (
      this.intelligenceBase +
      this.modifiers.map((m) => m.intelligence).reduce((a, b) => a + b)
    );
  }

  @Exclude()
  public get wisdom(): number {
    return (
      this.wisdomBase +
      this.modifiers.map((m) => m.wisdom).reduce((a, b) => a + b)
    );
  }

  @Exclude()
  public get charisma(): number {
    return (
      this.charismaBase +
      this.modifiers.map((m) => m.charisma).reduce((a, b) => a + b)
    );
  }

  @Exclude()
  public get bonus(): BonusPoints {
    return {
      strength: this.getBonus(this.strength),
      dexterity: this.getBonus(this.dexterity),
      constitution: this.getBonus(this.constitution),
      intelligence: this.getBonus(this.intelligence),
      wisdom: this.getBonus(this.wisdom),
      charisma: this.getBonus(this.charisma),
    };
  }

  private getBonus(attribute: number): number {
    return Math.floor((attribute - 10) / 2);
  }
}
