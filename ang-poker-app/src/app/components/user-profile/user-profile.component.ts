import { Component, OnInit } from '@angular/core';
import { UserStatsService } from '../../services/user-stats.service';
import { GameState } from '../../models/game-state.model';
import { Statistics } from '../../models/statistics.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

  public gameState: GameState = null;
  public userInfo: Statistics;

  constructor(private userStatsService: UserStatsService) { }

  getUserInformation(): void {
    this.userStatsService.fetchStatsInformation()
      .subscribe(
        (userInfo: Statistics) => {
          this.userInfo = userInfo;
          console.log(this.userInfo);
        },
        error => { console.log(error); }
      );
  }

  ngOnInit() {
    this.getUserInformation();
  }

}
