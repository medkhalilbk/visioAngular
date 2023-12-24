import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetMeetsService {

// Import the Date class if not already imported
// import { Date } from '@angular/common';

// ...

// Initialize the array with 5 objects
meetsList = [
  {id:1, name: "Daily Meet", date: new Date(), description: "daily meet" },
  {id:2, name: "Weekly Meet", date: new Date(), description: "weekly meet" },
  {id:3, name: "Monthly Meet", date: new Date(), description: "monthly meet" },
  {id:4, name: "Team Meet", date: new Date(), description: "team meet" },
  {id:5, name: "Project Meet", date: new Date(), description: "project meet" },
  {id:6, name: "Project Meet", date: new Date(), description: "project meet" }, 
  {id:17, name: "Project Meet", date: new Date(), description: "project meet" }
];


getMeetsList(){
  return this.meetsList
}

  constructor() { }
}
