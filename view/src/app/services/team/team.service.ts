import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { TeamDTO } from 'src/app/model/teamDTO';
import { environment } from 'src/environments/environment';


@Injectable()
export class TeamService {
  private sourceUsuariLogat = new Subject<any>();
  public usuariLogat$ = this.sourceUsuariLogat.asObservable();

  constructor(private http: HttpClient) { }

  public search(team: TeamDTO){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.get<TeamDTO[]>(environment.serverUrl + '/api/team/find-teams/' + team.name + "/" + team.shortName + "/" + team.email, {headers: headers});
  }
}
