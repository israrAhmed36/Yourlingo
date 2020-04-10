import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocdetailPage } from './docdetail.page';

const routes: Routes = [
  {
    path: '',
    component: DocdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocdetailPageRoutingModule {}
