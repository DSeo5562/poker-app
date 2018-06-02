import { Component, OnInit } from '@angular/core';
import { UserProfileInfoService } from '../../services/user-profile-info.service';
import { UserInfo } from '../../models/user-info.model';
import { GameState } from '../../models/game-state.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

  public gameState: GameState = null;
  public userInfo: UserInfo = new UserInfo(1, this.gameState, 'username', 'firstname', 'lastname', 'email', 'password', null);

  constructor(private userInfoService: UserProfileInfoService) { }
  getUserInformation(): void {
    this.userInfoService.fetchUserInformation()
      .subscribe(
        (userInfo: UserInfo) => {
          this.userInfo = userInfo;
        },
        error => { console.log(`Error: ${error}`); }
      );
  }

  // https://stackoverflow.com/questions/44472150/no-access-control-allow-origin-header-is-present-on-the-requested-resource-i

  ngOnInit() {
    this.getUserInformation();
  }

}
