import { SignalingService } from './../services/signaling.service';
import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { ViewChild } from '@angular/core';
import { CallService } from '../services/call.service';
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})

export class RoomComponent {
  @ViewChild('remoteVideo') remoteVideo!: ElementRef ;

  constructor(private route: ActivatedRoute, private socket: Socket, private callService:CallService, private signalingService:SignalingService) { }
  
 getMessages(): Observable<any> {
    return this.socket.fromEvent('meeting-recieve');
 }
   sendMessage(payload:any): void {
    this.socket.emit('meeting-send', payload);
  }
   public async makeCall(): Promise<void> {
    await this.callService.makeCall(this.remoteVideo);
  }
    private async _handleMessage(data:any): Promise<void> {
    switch (data.type) {
      case 'offer':
        await this.callService.handleOffer(data.offer, this.remoteVideo);
        break;

      case 'answer':
        await this.callService.handleAnswer(data.answer);
        break;

      case 'candidate':
        this.callService.handleCandidate(data.candidate);
        break;

      default:
        break;
    }
  } 

  ngOnInit() { 
    this.signalingService.getMessages().subscribe((payload) => this._handleMessage(payload));
     this.route.queryParams
      .subscribe(params => {
        console.log(params);  
      }
    );
  }   
}
