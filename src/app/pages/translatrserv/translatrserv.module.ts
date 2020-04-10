import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {NgCalendarModule} from 'ionic2-calendar';
import { TranslatrservPageRoutingModule } from './translatrserv-routing.module';

import { TranslatrservPage } from './translatrserv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgCalendarModule,
    TranslatrservPageRoutingModule
  ],
  declarations: [TranslatrservPage]
})
export class TranslatrservPageModule {}
