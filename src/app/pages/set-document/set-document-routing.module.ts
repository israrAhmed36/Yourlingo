import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetDocumentPage } from './set-document.page';

const routes: Routes = [
  {
    path: '',
    component: SetDocumentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetDocumentPageRoutingModule {}
