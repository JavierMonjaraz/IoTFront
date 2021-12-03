import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IoTComponent } from './io-t/io-t.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormControl} from "@angular/forms";

//Angular Material Elements
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms'

// Websocket
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import {environment} from "../environments/environment";

const config: SocketIoConfig ={
  url: environment.wsUrl, options:{}
}

@NgModule({
  declarations: [
    AppComponent,
    IoTComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
