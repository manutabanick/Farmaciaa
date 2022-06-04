import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectroSaludPage } from './electro-salud.page';

const routes: Routes = [
  {
    path: '',
    component: ElectroSaludPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectroSaludPageRoutingModule {}
