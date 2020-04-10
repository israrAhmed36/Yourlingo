import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetDocumentPageRoutingModule } from './set-document-routing.module';

import { SetDocumentPage } from './set-document.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetDocumentPageRoutingModule
  ],
  declarations: [SetDocumentPage]
})
export class SetDocumentPageModule {}
