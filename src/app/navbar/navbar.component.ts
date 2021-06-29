import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
declare var $ : any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  productAmmount!:number
  constructor(shoppingCart: ShoppingCartService) {
       this.productAmmount = shoppingCart.getNumberProducts()
  }

  ngOnInit(): void {
  }

  openModal(){
    $('#cartModal').modal('show')
  }
  closeModal(){
    $('#cartModal').modal('hide')
  }

}
