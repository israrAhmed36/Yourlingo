import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslatorsetPageRoutingModule } from './translatorset-routing.module';

import { TranslatorsetPage } from './translatorset.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslatorsetPageRoutingModule
  ],
  declarations: [TranslatorsetPage]
})
export class TranslatorsetPageModule {}
