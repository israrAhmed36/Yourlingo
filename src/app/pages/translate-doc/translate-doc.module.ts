import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateDocPageRoutingModule } from './translate-doc-routing.module';

import { TranslateDocPage } from './translate-doc.page';
import { NgCalendarModule } from 'ionic2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateDocPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [TranslateDocPage]
})
export class TranslateDocPageModule {}
