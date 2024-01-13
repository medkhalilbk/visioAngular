import { MediaService } from './services/media.service';
import { HttpClientModule } from '@angular/common/http';
import { PeerService } from './services/peer.service';
import { SocketService } from './services/socket.service';
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
import { VideoPlayerComponent } from './video-player/video-player.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { FormsModule } from '@angular/forms';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
export function playerFactory(): any {  
  return import('lottie-web');
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    DashboardComponent,
    MakeMeetComponent,
    RoomComponent,
    VideoPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule, MatButtonModule, ReactiveFormsModule,
    HttpClientModule,
    SweetAlert2Module,
    FormsModule,
    LottieModule.forRoot({ player: playerFactory }),  
  ],
  providers: [SocketService,PeerService,MediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
