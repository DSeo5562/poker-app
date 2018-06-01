import { GameState } from './gameState.model';

export class UserInfo {
  userId: Number;
  gameStates: GameState;
  email: String;
  password: String;
  firstName: String;
  lastName: String;
  username: String;
  isHost: Boolean;
  // public wins: Number;
  // public losses: Number;
  // public winnings: Number;


//  constructor(username: String, firstname: String, lastname: String, email: String, wins: Number, losses: Number, winnings: Number) {
constructor(userId: Number, gameStates: GameState, username: String, firstName: String, lastName: String,
email: String, password: String, isHost: Boolean) {
      this.userId = userId;
      this.gameStates = gameStates;
      this.username = username;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
      // this.wins = wins;
      // this.losses = losses;
      // this.winnings = winnings;
      this.isHost = isHost;

  }
}
