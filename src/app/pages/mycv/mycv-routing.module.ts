import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MycvPage } from './mycv.page';

const routes: Routes = [
  {
    path: '',
    component: MycvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MycvPageRoutingModule {}
