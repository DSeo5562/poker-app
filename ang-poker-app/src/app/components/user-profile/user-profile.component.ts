import { Component, OnInit } from '@angular/core';
import { UserProfileInfoService } from '../../services/user-profile-info.service';
import { UserInfo } from '../../models/user-info.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public userInfo: UserInfo = new UserInfo('Awang', 'Kevin', 'Ian', 'j@gmail.com', 10, 1, 1000000);
  //
  public username: String = this.userInfo.username;
  public firstname: String = this.userInfo.fName;
  public lastname: String = this.userInfo.lName;
  public fullname: String = '${firstname lastname}';
  public email: String = this.userInfo.email;
  public wins: Number = this.userInfo.wins;
  public losses: Number = this.userInfo.losses;
  // public ratio: Number = (this.wins / this.losses) * 100;
  public winnings: Number = this.userInfo.winnings;

  constructor(private userInfoService: UserProfileInfoService) { }

  ngOnInit() {
    this.getUserInformation();
  }

  getUserInformation(): void {
    this.userInfoService.fetchUserInformation()
      .subscribe(
        (userInfo: UserInfo) => this.userInfo = userInfo,
        error => console.log(`Error: ${error}`)
      );
  }

}
