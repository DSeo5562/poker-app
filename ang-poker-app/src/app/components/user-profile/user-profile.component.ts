import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public username: String = 'Awang';
  public firstname: String = 'Kevin';
  public lastname: String = 'Ian';
  public fullname: String = '${firstname lastname}';
  public email: String = 'j@gmail.com';
  public wins: number = 10;
  public losses: number = 1;
  public ratio: number = (this.wins / this.losses) * 100;
  public winnings: number = 1000000;

  constructor() { }

  ngOnInit() {
  }

}
