import {Component, OnInit} from '@angular/core';
import {WebsocketService} from 'src/app/services/websocket.service'
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-io-t',
  templateUrl: './io-t.component.html',
  styleUrls: ['./io-t.component.css']
})
export class IoTComponent implements OnInit {
  isTurnedOn = false;
  toggle = new FormControl('',[]);

  constructor(public wsservice : WebsocketService) { }

  ngOnInit(): void {
    this.toggle.valueChanges.subscribe(newToogleValue=>{
      this.isTurnedOn = newToogleValue
      if(newToogleValue){
        this.wsservice.sendStatus("1")
      }else{
        this.wsservice.sendStatus('0')
      }
    })
  }

  statusLed(){
    return this.isTurnedOn? 'Encendido' : 'Apagado'
  }

  statusServer(){
    return this.wsservice.serverStatus? 'en línea' : 'No disponible'
  }

}
