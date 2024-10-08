import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import Peer from 'peerjs';

export interface CallUser {
  peerId: string;
  stream: MediaStream;
}

@Injectable({
  providedIn: 'root'
})
export class PeerService {
  
  public peer: any;
  public myPeerId!: string;
  public joinUser = new BehaviorSubject<CallUser | null>(null);
  public leaveUser = new BehaviorSubject<string | null>(null);
  public localStream!: MediaStream;

  constructor(private http: HttpClient) { }

  getTurnServeConfig(): Observable<any> {
    return this.http.put('https://khalil:6b071596-a763-11ee-bfbb-0242ac130002@global.xirsys.net/_turn/strun', null,
      {
        headers: new HttpHeaders(
          { "Authorization": "Basic " + btoa("datnikon:f0f2a8b6-b7f9-11eb-9b35-0242ac150003") }
        )
      });
  }

  public openPeer(stream: MediaStream): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.getTurnServeConfig().subscribe(data => {
        try {
          this.initPeer(data.v);
          this.peer.on('open', (userPeerId: string) => {
            this.myPeerId = userPeerId;
            this.handleIncomingCall(stream);
            resolve(userPeerId);
          });
        } catch (error) {
          reject(error);
        }
      }, error => {
        reject(error);
      });
    });
  }

  public call(anotherPeerId: string, stream: MediaStream): void {
    const call = this.peer.call(anotherPeerId, stream);
    this.handleCall(call, anotherPeerId);
  }

  public handleCall(call: any, anotherPeerId: string): void {
    call.on('stream', (anotherStream: any) => {
      this.joinUser.next({ peerId: anotherPeerId, stream: anotherStream });
    });
  }

  private handleIncomingCall(stream: MediaStream): void {
    this.peer.on('call', (call: any) => {
      call.answer(stream);
      call.on('stream', (anotherStream: any) => {
        this.joinUser.next({ peerId: call.peer, stream: anotherStream });
      });
    });
  }

  private initPeer(config: any): void {
    this.peer = new Peer(this.myPeerId, {
      host: '/',
      port: 3001, 
    });
  }
}
