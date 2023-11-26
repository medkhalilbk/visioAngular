import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false;

  login(){
    this.isAuthenticated = true;
  }
  isLoggedIn(){
    return this.isAuthenticated
  }
  constructor() { }
}
