import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MakeMeetComponent } from './make-meet/make-meet.component';

const routes: Routes = [
  { path: 'connexion', component: LoginComponent },
  { path: 'inscription', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'makeMeet', component: MakeMeetComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
