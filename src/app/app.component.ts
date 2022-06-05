import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    
    { title: 'inicio', url: '/inicio', icon: 'home' },
    
    { title: 'carrito', url: '/carrito', icon: 'cart' },

    { title: 'categorias', url: '/categorias', icon: 'bag' },

    { title: 'contacto', url: '/contacto', icon: 'mail' },
    
  ];
 
  constructor() {}
}
