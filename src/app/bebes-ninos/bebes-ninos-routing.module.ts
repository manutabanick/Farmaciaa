import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BebesNinosPage } from './bebes-ninos.page';

const routes: Routes = [
  {
    path: '',
    component: BebesNinosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BebesNinosPageRoutingModule {}
