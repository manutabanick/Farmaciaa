import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    
    { title: 'Carrito', url: '/carrito', icon: 'cart' },

    { title: 'Categorias', url: '/categorias', icon: 'bag' },

    { title: 'Contacto', url: '/contacto', icon: 'mail' },

    { title: 'Cuenta', url: '/login', icon: 'person' },
    
  ];
 
  constructor() {}
}
