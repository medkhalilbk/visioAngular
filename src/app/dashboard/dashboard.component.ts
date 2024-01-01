import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { GetMeetsService } from '../services/get-meets.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  meets : any[] = []
  oldMeets  : any[] = []
  convertDate(date:string) {
    const originalDate = new Date(date);
    return originalDate.toLocaleString().slice(0,-8);
  }
  compareDates(date1: string, date2:string) {
  const parsedDate1 = new Date(date1);
  const parsedDate2 = new Date(date2);

 return (parsedDate1 < parsedDate2)  
   
   
}
 
 getRoomInformations(roomId:string){
console.log(roomId)
    }
  ngOnInit() { 
   
 this.getMeetesService.getMeetsList().subscribe((success:any) => {
   let nowDate = new Date().toString()
   if (success?.data) {
     success?.data.map((m: any) => {
      
       this.compareDates(m.date,nowDate) == true ? this.oldMeets?.push(m) : this.meets?.push(m)
     })
    }
     (err:any) => {
      console.log(err)
    }
});
console.log(this.meets,this.oldMeets)
}
constructor(private authService:AuthService, private getMeetesService : GetMeetsService){
console.log(this.authService.isLoggedIn())
}
}
function getRoomInformations(roomId: any, string: any) {
  throw new Error('Function not implemented.');
}

