import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
 
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },

  {
    path: 'carrito',
    loadChildren: () => import('./carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./contacto/contacto.module').then( m => m.ContactoPageModule)
  },  {
    path: 'dermocosmetica',
    loadChildren: () => import('./dermocosmetica/dermocosmetica.module').then( m => m.DermocosmeticaPageModule)
  },
  {
    path: 'electro-salud',
    loadChildren: () => import('./electro-salud/electro-salud.module').then( m => m.ElectroSaludPageModule)
  },
  {
    path: 'salud-bienestar',
    loadChildren: () => import('./salud-bienestar/salud-bienestar.module').then( m => m.SaludBienestarPageModule)
  },
  {
    path: 'perfumes-fragancias',
    loadChildren: () => import('./perfumes-fragancias/perfumes-fragancias.module').then( m => m.PerfumesFraganciasPageModule)
  },
  {
    path: 'cuidado-personal',
    loadChildren: () => import('./cuidado-personal/cuidado-personal.module').then( m => m.CuidadoPersonalPageModule)
  },
  {
    path: 'bebes-ninos',
    loadChildren: () => import('./bebes-ninos/bebes-ninos.module').then( m => m.BebesNinosPageModule)
  },
  {
    path: 'nutricion',
    loadChildren: () => import('./nutricion/nutricion.module').then( m => m.NutricionPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
