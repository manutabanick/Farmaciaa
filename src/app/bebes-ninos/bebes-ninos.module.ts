import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BebesNinosPageRoutingModule } from './bebes-ninos-routing.module';

import { BebesNinosPage } from './bebes-ninos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BebesNinosPageRoutingModule
  ],
  declarations: [BebesNinosPage]
})
export class BebesNinosPageModule {}
