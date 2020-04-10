import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslatordetailPageRoutingModule } from './translatordetail-routing.module';

import { TranslatordetailPage } from './translatordetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslatordetailPageRoutingModule
  ],
 
  declarations: [TranslatordetailPage]
})
export class TranslatordetailPageModule {}
