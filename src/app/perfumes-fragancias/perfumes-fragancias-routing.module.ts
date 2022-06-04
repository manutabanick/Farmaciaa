import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfumesFraganciasPage } from './perfumes-fragancias.page';

const routes: Routes = [
  {
    path: '',
    component: PerfumesFraganciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfumesFraganciasPageRoutingModule {}
