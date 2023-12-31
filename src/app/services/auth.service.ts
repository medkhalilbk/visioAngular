import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false; 
  serverLink = "http://localhost:3000"
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
  isLoggedIn(){
    return this.isAuthenticated
  }
signUp(user: any): Observable<any> {
  try {
    return this.http.post("http://localhost:3000/auth/signup", {
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
