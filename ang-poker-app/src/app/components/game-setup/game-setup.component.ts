import { Component, OnInit } from '@angular/core';
import { FilterUsernamePipe } from '../../pipes/filter-username.pipe';
import { UserProfileInfoService } from '../../services/user-profile-info.service';
import { UserInfo } from '../../models/user-info.model';
import { GameState } from '../../models/game-state.model';

@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.css']
})
export class GameSetupComponent implements OnInit {
  // public users: any = ['Adele', 'Agnes', 'Billy', 'Bob', 'Calvin', 'Christina', 'Cindy'];
  public users: UserInfo;

  public friendsToInvite: string[] = [];

  constructor(private userInfoService: UserProfileInfoService) { }

  getUserInformation(): void {
  this.userInfoService.fetchUserInformation()
    .subscribe(
      (userInfo: UserInfo) => {
        this.users = userInfo;
      },
      error => { console.log(`Error: ${error}`); }
    );
}

  ngOnInit() {
    this.getUserInformation();
  }

  public addFriendsToArr(user: UserInfo) {

    if (this.friendsToInvite.includes(user.username)) {
      const index: number = this.friendsToInvite.indexOf(user.username);
      this.friendsToInvite.splice(index, 1);
      return;
    }

    if (this.friendsToInvite.length < 6) {
      this.friendsToInvite.push(user.username);
    }
  }
}
