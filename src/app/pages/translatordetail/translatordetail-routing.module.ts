import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TranslatordetailPage } from './translatordetail.page';

const routes: Routes = [
  {
    path: '',
    component: TranslatordetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TranslatordetailPageRoutingModule {}
