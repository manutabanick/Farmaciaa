import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfumesFraganciasPageRoutingModule } from './perfumes-fragancias-routing.module';

import { PerfumesFraganciasPage } from './perfumes-fragancias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfumesFraganciasPageRoutingModule
  ],
  declarations: [PerfumesFraganciasPage]
})
export class PerfumesFraganciasPageModule {}
