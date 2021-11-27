import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public serverStatus = false

  constructor(private socket: Socket,) {
    this.checkStatus();
  }

  checkStatus() {
    this.socket.on('connect', () => {
      this.serverStatus = true;
    });

    this.socket.on('disconnect', () => {
      this.serverStatus= false;
    });
  }

  sendStatus(data:String){
    this.socket.emit('Status',data)
  }
}
