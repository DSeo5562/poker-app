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
  public wins: Number = 10;
  public losses: Number = 1;
  // public ratio: Number = (this.wins / this.losses) * 100;
  public winnings: Number = 1000000;

  constructor() { }

  ngOnInit() {
  }

}
