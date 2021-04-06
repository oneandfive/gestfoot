import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserDTO } from 'src/app/model/userDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public getUsers(){
    return this.http.get(environment.serverUrl + '/api/users/hello');
  }

  public register(user: UserDTO){
    return this.http.post(environment.serverUrl + '/api/users/register', user);
  }
}
