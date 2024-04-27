import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuartoAPage } from './cuarto-a.page';

const routes: Routes = [
  {
    path: '',
    component: CuartoAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuartoAPageRoutingModule {}
