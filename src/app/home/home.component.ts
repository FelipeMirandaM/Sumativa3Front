import { Component} from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { ActivatedRoute, Router } from '@angular/router';
declare var $ : any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent{
  productList: Map<number, Product> = new Map<number, Product>();
  productNumber!:number
  activePage:number = 1
  returnedArray!: any;
  shoppingList:Map<number, [Product,number]> = new Map<number, [Product,number]>()
  total:number = 0
  subtotal:number = 0
  iva:number = 0
  filter!: string;
  constructor(private shoppingCart: ShoppingCartService, private router: Router, private route: ActivatedRoute){
    this.productNumber = shoppingCart.getNumberProducts()
    this.productList = shoppingCart.getProductList()
    this.returnedArray =  Array.from(this.productList).slice(0, 12)
  }
  checkOrder(){
    this.router.navigate(['../sale'], {relativeTo:this.route});
    $('#cartModal').modal('hide')
  }
  openModal(){
    this.shoppingList = this.shoppingCart.getShoppingCart()
    this.reCalculate()
    $('#cartModal').modal('show')
    
  }
  reCalculate(){
      this.subtotal=0
      this.productNumber = this.shoppingCart.getNumberProducts()
      this.shoppingList.forEach(element => {
        this.subtotal+=element[0].price * element[1]
        });
        this.iva = this.subtotal*0.19
        this.total = this.subtotal*1.19
  }

  changeAmmount(value:any,id:number){
    if(value.target.value != ""){
      this.shoppingList.set(id, [this.productList.get(id) as Product, parseInt(value.target.value)])
      this.shoppingCart.updateShopping(this.shoppingList)
       this.reCalculate()
    }

  
  }

  closeModal(){
    $('#cartModal').modal('hide')
  }
  updateCurrentPage(page:number){
      this.activePage = page
  }
  addProduct(id:number){
      this.shoppingCart.addProduct(id)
      this.productNumber = this.shoppingCart.getNumberProducts()

  }
  deleteProduct(id:number){
    this.shoppingList.delete(id)
    this.shoppingCart.updateShopping(this.shoppingList)
    this.reCalculate()
  }
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray =  Array.from(this.productList).slice(startItem, endItem);
  }

}
interface Product{
  id:number,
  img:string, 
  brand:string, 
  price:number, 
  description:string
}
