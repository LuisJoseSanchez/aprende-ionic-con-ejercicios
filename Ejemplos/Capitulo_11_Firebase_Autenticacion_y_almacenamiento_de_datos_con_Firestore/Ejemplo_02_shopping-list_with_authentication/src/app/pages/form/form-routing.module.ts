import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormPage } from './form.page';

const routes: Routes = [
  {
    path: '',
    component: FormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormPageRoutingModule {}
