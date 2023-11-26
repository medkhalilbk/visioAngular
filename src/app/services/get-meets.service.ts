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
  { name: "Daily Meet", date: new Date(), description: "daily meet" },
  { name: "Weekly Meet", date: new Date(), description: "weekly meet" },
  { name: "Monthly Meet", date: new Date(), description: "monthly meet" },
  { name: "Team Meet", date: new Date(), description: "team meet" },
  { name: "Project Meet", date: new Date(), description: "project meet" },
  { name: "Project Meet", date: new Date(), description: "project meet" }, 
  { name: "Project Meet", date: new Date(), description: "project meet" }
];


getMeetsList(){
  return this.meetsList
}

  constructor() { }
}
