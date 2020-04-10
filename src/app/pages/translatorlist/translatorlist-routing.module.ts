import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TranslatorlistPage } from './translatorlist.page';

const routes: Routes = [
  {
    path: '',
    component: TranslatorlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TranslatorlistPageRoutingModule {}
