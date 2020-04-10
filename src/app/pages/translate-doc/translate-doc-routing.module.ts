import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TranslateDocPage } from './translate-doc.page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgCalendarModule } from 'ionic2-calendar';

const routes: Routes = [
  {
    path: '',
    component: TranslateDocPage
  }
];

@NgModule({
  imports: [
   
    RouterModule.forChild(routes),
  
  ],
    
  exports: [RouterModule],
})
export class TranslateDocPageRoutingModule {}
