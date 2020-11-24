import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class LoginService {
  private sourceUsuariLogat = new Subject<any>();
  public usuariLogat$ = this.sourceUsuariLogat.asObservable();

  constructor(private http: HttpClient,
              private router: Router) { }

  public accedirAmbContrasenya(usuari: String, contrasenya: String): Observable<any> {
    const body = {
      j_username: usuari,
      j_password: contrasenya
    };
return null;
    // return this.http.post<UsuariResultVO>(environment.serverUrl + '/conta/rest/acces/accedir-amb-contrasenya', body);
  }
}
