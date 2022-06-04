import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaludBienestarPage } from './salud-bienestar.page';

const routes: Routes = [
  {
    path: '',
    component: SaludBienestarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaludBienestarPageRoutingModule {}
