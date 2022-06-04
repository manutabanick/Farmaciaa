import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DermocosmeticaPage } from './dermocosmetica.page';

const routes: Routes = [
  {
    path: '',
    component: DermocosmeticaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DermocosmeticaPageRoutingModule {}
