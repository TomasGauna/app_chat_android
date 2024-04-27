import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuartoBPage } from './cuarto-b.page';

const routes: Routes = [
  {
    path: '',
    component: CuartoBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuartoBPageRoutingModule {}
