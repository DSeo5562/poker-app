import { Component, OnInit } from '@angular/core';
import { UserProfileInfoService } from '../../services/user-profile-info.service';
import { UserInfo } from '../../models/user-info.model';
import { GameState } from '../../models/gameState.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public gameState: GameState = null;
  public userInfo: UserInfo = new UserInfo(1, this.gameState, 'Awang', 'Kevin', 'Ian', 'j@gmail.com', 'pass', true);
  // public userInfo: UserInfo;
  // (userId: Number, gameStates: GameState, username: String, firstname: String, lastname: String,
// email: String, password: String, isHost: Boolean)

  public username: String = this.userInfo.username;
  public firstname: String = this.userInfo.firstName;
  public lastname: String = this.userInfo.lastName;
  public fullname: String = '${firstname lastname}';
  public email: String = this.userInfo.email;
//  public wins: Number = this.userInfo.wins;
//  public losses: Number = this.userInfo.losses;
  // public ratio: Number = (this.wins / this.losses) * 100;
//  public winnings: Number = this.userInfo.winnings;

  constructor(private userInfoService: UserProfileInfoService) { }
  getUserInformation(): void {
    this.userInfoService.fetchUserInformation()
      .subscribe(
        (userInfo: UserInfo) => {
          console.log(userInfo);
          this.userInfo = userInfo;
        },
        error => { console.log(`Error: ${error}`); }
      );
  }

  // https://stackoverflow.com/questions/44472150/no-access-control-allow-origin-header-is-present-on-the-requested-resource-i

  ngOnInit() {
    console.log('onIinit');
    this.getUserInformation();
    // this.username = this.userInfo.username;
    // this.firstname = this.userInfo.firstName;
    // this.lastname = this.userInfo.lastName;
    // this.fullname = '${firstname lastname}';
    // this.email = this.userInfo.email;
  }



}
