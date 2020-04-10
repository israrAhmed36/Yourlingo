import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailpassPage } from './emailpass.page';

const routes: Routes = [
  {
    path: '',
    component: EmailpassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmailpassPageRoutingModule {}
