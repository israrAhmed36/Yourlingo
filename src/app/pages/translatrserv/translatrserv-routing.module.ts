import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TranslatrservPage } from './translatrserv.page';

const routes: Routes = [
  {
    path: '',
    component: TranslatrservPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TranslatrservPageRoutingModule {}
