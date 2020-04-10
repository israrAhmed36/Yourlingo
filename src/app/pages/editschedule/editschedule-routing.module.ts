import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditschedulePage } from './editschedule.page';

const routes: Routes = [
  {
    path: '',
    component: EditschedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditschedulePageRoutingModule {}
