import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TranslatorsetPage } from './translatorset.page';

const routes: Routes = [
  {
    path: '',
    component: TranslatorsetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TranslatorsetPageRoutingModule {}
