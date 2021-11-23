import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import {IoTComponent} from "./io-t/io-t.component";

const routes: Routes = [
  { path: '', redirectTo: 'IoT', pathMatch: 'full' },
  { path: 'IoT', component: IoTComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
