import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
 
})
export class CarritoPage implements OnInit {


carrito=0
cantidad=1 //la cantidad seiniciaria en 1


  
  constructor() { 

   
  }
  
  ngOnInit() {
 
  }
sumarcarrito(){ //arrglo de cantidad de productos
  this.carrito=this.carrito+this.cantidad
  
 
}

}
