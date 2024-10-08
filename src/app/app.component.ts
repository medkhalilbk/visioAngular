import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'visioAngular';
  isAuth = false;
   logout(){
     this.authService.logout()
     this.router.navigate(['/connexion'])
    }
  constructor(public router: Router,public authService : AuthService) {
    this.isAuth = this.authService.isLoggedIn()
   
  }
}
