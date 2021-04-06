import { BaseDTO } from "./baseDTO";

export class UserDTO extends BaseDTO{

  private USER_ID!: number;
  private USER_FIRST_NAME!: string;
  private USER_LAST_NAME!: string;
  private USER_EMAIL!: string;
  private USER_PASSWORD!: string;
  private USER_PHONE!: string;

  constructor() {
    super();
   }

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
}
