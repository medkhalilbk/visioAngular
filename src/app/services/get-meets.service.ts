import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http'; 

import { Injectable } from '@angular/core';
import { v4 as uuidV4 } from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class GetMeetsService { 
 


getMeetsList(){ 
  return this.http.get(this.auth.serverLink +`/users/${this.auth.getUserIdFromLocalStorage()}/meets`,{headers:{
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.auth.getTokenFromLocalStorage()}`
  }
  })
  
}

  constructor(private http: HttpClient, private auth:AuthService) { }
}
