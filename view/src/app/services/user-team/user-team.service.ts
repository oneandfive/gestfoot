import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { UserTeamDTO } from 'src/app/model/userTeamDTO';
import { environment } from 'src/environments/environment';


@Injectable()
export class UserTeamService {
  private sourceUsuariLogat = new Subject<any>();
  public usuariLogat$ = this.sourceUsuariLogat.asObservable();

  constructor(private http: HttpClient) { }

  public findUserTeams(userID: number){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.get<any[]>(environment.serverUrl + '/api/user-teams/find-user-teams/' + userID, {headers: headers});
  }
}
