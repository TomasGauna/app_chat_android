import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuartoAPageRoutingModule } from './cuarto-a-routing.module';

import { CuartoAPage } from './cuarto-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuartoAPageRoutingModule
  ],
  declarations: [CuartoAPage]
})
export class CuartoAPageModule {}
