export class UserDTO {

  private USER_ID!: number;
  private USER_FIRST_NAME!: string;
  private USER_LAST_NAME!: string;
  private USER_EMAIL!: string;
  private USER_PASSWORD!: string;
  private USER_PHONE!: string;
  private USER_DATE_CREATE!: Date;
  private USER_USU_CREATE!: number;
  private USER_DATE_MOD!: Date;
  private USER_USU_MOD!: number;

  constructor() { }

  get id(): number {
    return this.USER_ID;
  }
  set id(value: number) {
      this.USER_ID = value;
  }

  get firstName(): string {
    return this.USER_FIRST_NAME;
  }
  set firstName(value: string) {
      this.USER_FIRST_NAME = value;
  }

  get lastName(): string {
    return this.USER_LAST_NAME;
  }
  set lastName(value: string) {
      this.USER_LAST_NAME = value;
  }

  get email(): string {
    return this.USER_EMAIL;
  }
  set email(value: string) {
      this.USER_EMAIL = value;
  }

  get password(): string {
    return this.USER_PASSWORD;
  }
  set password(value: string) {
      this.USER_PASSWORD = value;
  }

  get phone(): string {
    return this.USER_PHONE;
  }
  set phone(value: string) {
      this.USER_PHONE = value;
  }

  get dateCreate(): Date {
    return this.USER_DATE_CREATE;
  }
  set dateCreate(value: Date) {
      this.USER_DATE_CREATE = value;
  }

  get usuCreate(): number {
    return this.USER_USU_CREATE;
  }
  set usuCreate(value: number) {
      this.USER_USU_CREATE = value;
  }

  get usuMod(): number {
    return this.USER_USU_MOD;
  }
  set usuMod(value: number) {
      this.USER_USU_MOD = value;
  }

  get dataMod(): Date {
    return this.USER_DATE_MOD;
  }
  set dateMod(value: Date) {
      this.USER_DATE_MOD = value;
  }
}
