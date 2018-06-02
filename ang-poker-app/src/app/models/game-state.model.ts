export class GameState {
  game_Id: Number;
  deckState: any;
  currentTurn: Number;
  pot: Number;
  status: Number;
  timeLeft: Number;
  tableState: any;

  constructor(game_Id: Number, deckState: any, currentTurn: Number, pot: Number, status: Number, timeLeft: Number, tableState: any) {
    this.game_Id = game_Id;
    this.deckState = deckState;
    this.currentTurn = currentTurn;
    this.pot = pot;
    this.status = status;
    this.timeLeft = timeLeft;
    this.tableState = tableState;
  }
}
