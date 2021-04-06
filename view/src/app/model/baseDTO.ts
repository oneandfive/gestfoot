export class BaseDTO {

  private DATE_CREATE!: Date;
  private USU_CREATE!: number;
  private DATE_MOD!: Date;
  private USU_MOD!: number;

  constructor() { }

  get dateCreate(): Date {
    return this.DATE_CREATE;
  }
  set dateCreate(value: Date) {
      this.DATE_CREATE = value;
  }

  get usuCreate(): number {
    return this.USU_CREATE;
  }
  set usuCreate(value: number) {
      this.USU_CREATE = value;
  }

  get usuMod(): number {
    return this.USU_MOD;
  }
  set usuMod(value: number) {
      this.USU_MOD = value;
  }

  get dataMod(): Date {
    return this.DATE_MOD;
  }
  set dateMod(value: Date) {
      this.DATE_MOD = value;
  }
}
