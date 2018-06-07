export class CurrentHand {

  public hand: any;
  public winnings: Number;
  public hasFolded: any;
  public playerOrder: Number;

  constructor(hand: any, winnings: Number, hasFolded: any, playerOrder: Number) {

    this.hand = hand;
    this.winnings = winnings;
    this.hasFolded = hasFolded;
    this.playerOrder = playerOrder;

  }
}
