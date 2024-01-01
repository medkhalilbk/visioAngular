import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false; 
  serverLink = "http://localhost:3000"

  logout() { 
    this.isAuthenticated = false
    localStorage.setItem('token',"")
    localStorage.setItem('userId', "")
     
  }
  setIsAuth() {
    this.isAuthenticated = true;
  }
  saveUserInLocalStorage(data:any) {
    localStorage.setItem("token", data.token)
    localStorage.setItem("userId",data.userId)
  }
  getUserIdFromLocalStorage() {
    return localStorage.getItem('userId')
  }
  getTokenFromLocalStorage() {
    return localStorage.getItem('token')
  }
  login(user:any){
    try {
      return this.http.post(this.serverLink+"/auth/login", {
        email: user.username,
        password: user.password
      });
    } catch (error) { 
      console.error('Synchronous error during signup:', error);
      return new Observable();  
    }

  }
  isLoggedIn() {
    const token = this.getUserIdFromLocalStorage()
    return this.isAuthenticated || token !== ""
  }
signUp(user: any): Observable<any> {
  try {
    return this.http.post(this.serverLink+"/auth/signup", {
      email: user.email,
      name: user.fullName,
      password: user.password
    });
  } catch (error) { 
    console.error('Synchronous error during signup:', error);
    return new Observable();  
  }
}
  constructor(private http:HttpClient) { }
}
