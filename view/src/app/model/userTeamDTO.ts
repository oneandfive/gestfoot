export class UserTeamDTO {

  private USER_TEAM_ID!: number;
  private USER_ID!: number;
  private TEAM_ID!: number;
  private TEAM_NAME!: string;

  constructor() { }

  get userTeamID(): number {
    return this.USER_TEAM_ID;
  }
  set userTeamID(value: number) {
      this.USER_TEAM_ID = value;
  }

  get userID(): number {
    return this.USER_ID;
  }
  set userID(value: number) {
      this.USER_ID = value;
  }

  get teamID(): number {
    return this.TEAM_ID;
  }
  set teamID(value: number) {
      this.TEAM_ID = value;
  }

  get teamName(): string {
    return this.TEAM_NAME;
  }
  set teamName(value: string) {
      this.TEAM_NAME = value;
  }
}
