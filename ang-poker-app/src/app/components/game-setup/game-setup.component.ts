import { Component, OnInit } from '@angular/core';
import { FilterUsernamePipe } from '../../pipes/filter-username.pipe';

@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.css']
})
export class GameSetupComponent implements OnInit {
  public users: any = ['Adele', 'Agnes', 'Billy', 'Bob', 'Calvin', 'Christina', 'Cindy'];
  public friendsToInvite: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  public addFriendsToArr(user: string) {

    if (this.friendsToInvite.includes(user)) {
      const index: number = this.friendsToInvite.indexOf(user);
      this.friendsToInvite.splice(index, 1);
      return;
    }

    if (this.friendsToInvite.length < 6) {
      this.friendsToInvite.push(user);
    }
  }
}
