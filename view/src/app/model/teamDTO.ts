import { BaseDTO } from "./baseDTO";

export class TeamDTO extends BaseDTO{

  private TEAM_ID!: number;
  private TEAM_NAME!: string;
  private TEAM_SHORT_NAME!: string;
  private TEAM_EMAIL!: string;
  private TEAM_STATE!: string;


  constructor() {
    super();
   }

  get id(): number {
    return this.TEAM_ID;
  }
  set id(value: number) {
      this.TEAM_ID = value;
  }

  get name(): string {
    return this.TEAM_NAME;
  }
  set name(value: string) {
      this.TEAM_NAME = value;
  }

  get shortName(): string {
    return this.TEAM_SHORT_NAME;
  }
  set shortName(value: string) {
      this.TEAM_SHORT_NAME = value;
  }

  get email(): string {
    return this.TEAM_EMAIL;
  }
  set email(value: string) {
      this.TEAM_EMAIL = value;
  }

  get state(): string {
    return this.TEAM_STATE;
  }
  set state(value: string) {
      this.TEAM_STATE = value;
  }
}
