import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { UserDTO } from 'src/app/model/userDTO';
import { environment } from 'src/environments/environment';


@Injectable()
export class LoginService {
  private sourceUsuariLogat = new Subject<any>();
  public usuariLogat$ = this.sourceUsuariLogat.asObservable();

  constructor(private http: HttpClient) { }

  public saveUsers(user: UserDTO){
    return this.http.post(environment.serverUrl + '/api/users/hello', user);
  }
}
