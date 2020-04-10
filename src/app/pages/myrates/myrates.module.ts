import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyratesPageRoutingModule } from './myrates-routing.module';

import { MyratesPage } from './myrates.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyratesPageRoutingModule
  ],
  declarations: [MyratesPage]
})
export class MyratesPageModule {}
