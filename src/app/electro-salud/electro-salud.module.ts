import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectroSaludPageRoutingModule } from './electro-salud-routing.module';

import { ElectroSaludPage } from './electro-salud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectroSaludPageRoutingModule
  ],
  declarations: [ElectroSaludPage]
})
export class ElectroSaludPageModule {}
