import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuartoBPageRoutingModule } from './cuarto-b-routing.module';

import { CuartoBPage } from './cuarto-b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuartoBPageRoutingModule
  ],
  declarations: [CuartoBPage]
})
export class CuartoBPageModule {}
