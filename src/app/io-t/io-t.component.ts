import {Component, OnInit} from '@angular/core';
import {WebsocketService} from 'src/app/services/websocket.service'

@Component({
  selector: 'app-io-t',
  templateUrl: './io-t.component.html',
  styleUrls: ['./io-t.component.css']
})
export class IoTComponent implements OnInit {
  isTurnedOn = false;

  constructor(public wsservice : WebsocketService) { }

  ngOnInit(): void {
  }

  statusLed(){
    return this.isTurnedOn? 'Encendido' : 'Apagado'
  }

  statusServer(){
    return this.wsservice.serverStatus? 'en línea' : 'No disponible'
  }

}
