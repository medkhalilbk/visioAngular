import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { GetMeetsService } from '../services/get-meets.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
meets : any[] | undefined
ngOnInit() {
  this.meets = this.getMeetesService.getMeetsList()
}
constructor(private authService:AuthService, private getMeetesService : GetMeetsService){
console.log(this.authService.isLoggedIn())
}
}
