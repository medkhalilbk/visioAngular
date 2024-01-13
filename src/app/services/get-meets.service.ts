import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http'; 

import { Injectable } from '@angular/core';
import { v4 as uuidV4 } from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class GetMeetsService { 
 
  getMeetDetail(meetId:any) {
  return this.http.get(this.auth.serverLink+`/meets/${meetId}`  ,{headers:{
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.auth.getTokenFromLocalStorage()}`
  }
  })
}

getMeetsList(){ 
  return this.http.get(this.auth.serverLink +`/users/${this.auth.getUserIdFromLocalStorage()}/meets`,{headers:{
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.auth.getTokenFromLocalStorage()}`
  }
  }) 
}

  createMeet(meetObJ:any) {
    return this.http.post(this.auth.serverLink + '/meets', meetObJ, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.auth.getTokenFromLocalStorage()}`
      }})
}  
  
  constructor(private http: HttpClient, private auth:AuthService) { }
}
