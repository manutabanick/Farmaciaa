import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DermocosmeticaPageRoutingModule } from './dermocosmetica-routing.module';

import { DermocosmeticaPage } from './dermocosmetica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DermocosmeticaPageRoutingModule
  ],
  declarations: [DermocosmeticaPage]
})
export class DermocosmeticaPageModule {}
