export class UserInfo {
  public  username: String;
  public fName: String;
  public lName: String;
  public email: String;
  public wins: Number;
  public losses: Number;
  public winnings: Number;

  constructor(username: String, fName: String, lName: String, email: String, wins: Number, losses: Number, winnings: Number) {
    this.username = username;
    this.fName = fName;
    this.lName = lName;
    this.email = email;
    this.wins = wins;
    this.losses = losses;
    this.winnings = winnings;
  }
}
