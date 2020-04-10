import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslatorlistPageRoutingModule } from './translatorlist-routing.module';

import { TranslatorlistPage } from './translatorlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslatorlistPageRoutingModule
  ],
  declarations: [TranslatorlistPage]
})
export class TranslatorlistPageModule {}
