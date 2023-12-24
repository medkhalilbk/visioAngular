import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MakeMeetComponent } from './make-meet/make-meet.component';
import { RoomComponent } from './room/room.component'; 
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    DashboardComponent,
    MakeMeetComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule, MatButtonModule, ReactiveFormsModule, 
    SocketIoModule.forRoot({url:"http://localhost:3000",options:{}})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
