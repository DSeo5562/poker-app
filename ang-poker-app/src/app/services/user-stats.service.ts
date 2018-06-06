import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Statistics } from '../models/statistics.model';
import { UserInfo } from '../models/user-info.model';
import { GameState } from '../models/game-state.model';

@Injectable({
  providedIn: 'root'
})
export class UserStatsService {

  constructor(private httpClient: HttpClient) { }

  public fetchStatsInformation(): Observable<Statistics> {
    return this.httpClient.get<Statistics>('http://pokerapp.cfapps.io/stats/1');
  }
}
