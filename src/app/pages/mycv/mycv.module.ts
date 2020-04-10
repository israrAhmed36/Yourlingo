import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MycvPageRoutingModule } from './mycv-routing.module';

import { MycvPage } from './mycv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MycvPageRoutingModule
  ],
  declarations: [MycvPage]
})
export class MycvPageModule {}
