import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from '../models/user-info.model';


@Injectable({
  providedIn: 'root'
})
export class UserProfileInfoService {

  constructor(private http: Http, private httpClient: HttpClient) { }

  public fetchUserInformation(): Observable<UserInfo> {
    return this.httpClient.get<UserInfo>('link goes here');
    }
}
