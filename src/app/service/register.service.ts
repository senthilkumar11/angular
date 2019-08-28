import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class User {
  constructor(public id: number,
    public userName: string,
    public password: string,
    public email: string,
    public userType: string,
    public mobile: string
  )  {}
}



@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  constructor(private httpClient:HttpClient) { }
  
  registerUser(user)  {
    console.log(user);
    return this.httpClient.post<User>('http://localhost:9091/registeruser', user);
  }
  getUsers() {
    return this.httpClient.get<User[]>('http://localhost:9091/userlist');
  }
  
}
