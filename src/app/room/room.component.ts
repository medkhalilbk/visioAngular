import { GetMeetsService } from './../services/get-meets.service';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Utils from 'src/app/utils/utils';
import { CallUser, PeerService } from '../services/peer.service';
import { SocketService } from '../services/socket.service';
 
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})

export class RoomComponent implements OnInit, AfterViewInit {
  public animationOption = {
    path:"./assets/loading_webcam.json"
  }
 public joinedUsers: CallUser[] = [];
  public localStream!: MediaStream;
  public roomId: any ;
  public isHideChat = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private socketService: SocketService,
    private meetService:GetMeetsService,
    private peerService: PeerService,) { }

  ngAfterViewInit(): void {
    this.listenNewUser();
    this.listenLeavedUser();
    this.detectScreenWith();
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => { 
      this.roomId = params['roomId']
      this.meetService.getMeetDetail(params['roomId']).subscribe(
      (response:any) => { 
        console.log(response.data)
      },
      (error) => {
        // Handle the error
        console.error('Error getting meet details:', error);
      })
    })
    
    Utils.getMediaStream({ video: true, audio: true }).then(stream => {
      this.localStream = stream;
      this.openPeer();
    })
  }

  hideOrUnhideChat(): void {
    this.isHideChat = !this.isHideChat;
  }

  private detectScreenWith(): void {
    if (window.screen.width > 719) {
      setTimeout(() => {
        this.isHideChat = false;
      }, 200);
    }
  }

  private listenNewUser(): void {
    this.listenNewUserJoinRoom();
    this.listenNewUserStream();
  }

  private listenLeavedUser(): void {
    this.socketService.leavedId.subscribe(userPeerId => {
      this.joinedUsers = this.joinedUsers.filter(x => x.peerId != userPeerId);
    })
  }

  private listenNewUserJoinRoom(): void {
    this.socketService.joinedId.subscribe(newUserId => {
      if (newUserId) {
        this.makeCall(newUserId);
      }
    })
  }

  private listenNewUserStream(): void {
    this.peerService.joinUser.subscribe(user => {
      if (user) {
        if (this.joinedUsers.findIndex(u => u.peerId === user.peerId) < 0) {
          this.joinedUsers.push(user);
        }
      }
    })
  }

  private openPeer(): void {
    this.peerService.openPeer(this.localStream).then((myPeerId) => {
      this.joinRoom(this.roomId, myPeerId);
    })
  }

  private makeCall(anotherPeerId: string): void {
    this.peerService.call(anotherPeerId, this.localStream);
  }

  private joinRoom(roomId: string, userPeerId: string): void {
    this.socketService.joinRoom(roomId, userPeerId);
  }

}
