import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaludBienestarPageRoutingModule } from './salud-bienestar-routing.module';

import { SaludBienestarPage } from './salud-bienestar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaludBienestarPageRoutingModule
  ],
  declarations: [SaludBienestarPage]
})
export class SaludBienestarPageModule {}
