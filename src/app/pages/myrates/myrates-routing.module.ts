import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyratesPage } from './myrates.page';

const routes: Routes = [
  {
    path: '',
    component: MyratesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyratesPageRoutingModule {}
