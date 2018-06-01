import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from '../models/user-info.model';
import { GameState } from '../models/gameState.model';



@Injectable({
  providedIn: 'root'
})

export class UserProfileInfoService {

  constructor(private httpClient: HttpClient) { }

  public fetchUserInformation(): Observable<UserInfo> {
    console.log('service invoked');
    console.log(this.httpClient.get<UserInfo>('http://ec2-52-15-128-99.us-east-2.compute.amazonaws.com:8080/PokerApp/userInfo'));
    return this.httpClient.get<UserInfo>('http://ec2-52-15-128-99.us-east-2.compute.amazonaws.com:8080/PokerApp/userInfo');
  }
}
