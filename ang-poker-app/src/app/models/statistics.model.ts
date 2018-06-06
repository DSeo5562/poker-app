export class Statistics {

  public totalWinnings: Number;
  public wins: Number;
  public losses: Number;

  constructor (totalWinnings: Number, wins: Number, losses: Number) {
    this.totalWinnings = totalWinnings;
    this.wins = wins;
    this.losses = losses;
  }
}
