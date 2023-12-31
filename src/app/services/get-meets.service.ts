import { Injectable } from '@angular/core';
import { v4 as uuidV4 } from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class GetMeetsService { 
meetsList = [
  {id:"123", name: "Daily Meet", date: new Date(), description: "daily meet" },
  {id:uuidV4(), name: "Weekly Meet", date: new Date(), description: "weekly meet" },
  {id:uuidV4(), name: "Monthly Meet", date: new Date(), description: "monthly meet" },
  {id:uuidV4(), name: "Team Meet", date: new Date(), description: "team meet" },
  {id:uuidV4(), name: "Project Meet", date: new Date(), description: "project meet" },
  {id:uuidV4(), name: "Project Meet", date: new Date(), description: "project meet" }, 
  {id:uuidV4(), name: "Project Meet", date: new Date(), description: "project meet" }
];


getMeetsList(){
  return this.meetsList
}

  constructor() { }
}
