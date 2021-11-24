import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-io-t',
  templateUrl: './io-t.component.html',
  styleUrls: ['./io-t.component.css']
})
export class IoTComponent implements OnInit {
  isTurnedOn = true;
  isConected = true;

  constructor() { }

  ngOnInit(): void {
  }

  statusLed(){
    return this.isTurnedOn? 'Encendido' : 'Apagado'
  }

  statusServer(){
    return this.isConected? 'Online' : 'Offline'
  }
}
