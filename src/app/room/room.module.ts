import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";  
import { PeerService } from "../services/peer.service";
import { SocketService } from "../services/socket.service";
import { RoomComponent } from "./room.component";
import { HttpClientModule } from '@angular/common/http';
 
const rommRoutes: Routes = [
    {
        path: '',
        component: RoomComponent
    }
]

@NgModule({
    declarations: [  
    ],
    providers: [
        PeerService,
        SocketService
    ],
    imports: [RouterModule.forChild(rommRoutes), CommonModule,   FormsModule, HttpClientModule],
    exports: [RouterModule]
})
export class RoomModule {

}