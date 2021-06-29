import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  productList: Map<number, Product> = new Map<number, Product>();
  shoppingCart: Map<number, [Product,number]>  = new Map();
  constructor() { 

    this.productList.set(0, {id:0 ,img: '/assets/img/reloj1.jpg', brand: "Garmin", price: 279990, description: 'Smartwatch Instinct Graphite Garmin'} as Product);
    this.productList.set(1, {id:1 , img: '/assets/img/reloj2.jpg', brand: "Casio", price: 35990, description: 'Reloj Casual Dorado Casio'}  as Product);
    this.productList.set(2, {id:2 , img: '/assets/img/reloj3.jpg', brand: "Garmin", price: 299990, description: 'Smartwatch Instinct Tactical Coyote Tan Garmin'} as Product);
    this.productList.set(3, {id:3 , img: '/assets/img/reloj4.jpg', brand: "Jaguar", price: 1284000, description: 'Reloj Automatic Azul Jaguar'} as Product);
    this.productList.set(4, {id:4 , img: '/assets/img/reloj5.jpg', brand: "Jaguar", price: 432000, description: 'Reloj Woman Nácar aguar'} as Product);
    this.productList.set(5, {id:5 , img: '/assets/img/reloj6.jpg', brand: "Festina", price: 167000, description: 'Reloj Chrono Sport Azul Festina'} as Product);
    this.productList.set(6, {id:6 , img: '/assets/img/reloj7.jpg', brand: "Garmin", price: 749990, description: 'Smartwatch Fenix 6 Sapphire South America Negro Garmin'} as Product);
    this.productList.set(7, {id:7 , img: '/assets/img/reloj8.jpg', brand: "Lhotse", price: 19990, description: 'Reloj Análogo Sky Watch Correa Metálica Lhotse'} as Product);
    this.productList.set(8, {id:8 , img: '/assets/img/reloj9.jpg', brand: "Festina", price: 110000, description: 'Reloj Retro Café Festina'} as Product);
    this.productList.set(9, {id:9 , img: '/assets/img/reloj10.jpg', brand: "Festina", price: 154000, description: 'Reloj Hombre F20330/5 Negro Festina'} as Product) ;
    this.productList.set(10, {id:10 , img: '/assets/img/reloj11.jpg', brand: "CAT", price: 149990, description: 'Reloj Hombre Adventurer Oro Rosa Cat'} as Product);
    this.productList.set(11, {id:11 , img: '/assets/img/reloj12.jpg', brand: "Festina", price: 239000, description: 'Reloj Prestige Dorado Festina'} as Product);
    this.productList.set(12, {id:12 , img: '/assets/img/reloj13.jpg', brand: "Garmin", price: 18900, description: 'Reloj Negro Vox'} as Product);
    this.productList.set(13, {id:13 , img: '/assets/img/reloj14.jpg', brand: "Lacoste", price: 209900, description: 'Reloj Negro Lacoste'} as Product);
    this.productList.set(14, {id:14 , img: '/assets/img/reloj15.jpg', brand: "Orient", price: 99900, description: 'Reloj Negro Orient'} as Product);
    this.productList.set(15, {id:15 , img: '/assets/img/reloj16.jpg', brand: "Jagua", price: 480000, description: 'Reloj Executive Dorado Jaguar'} as Product) ;

  }
  getProductList(){
    return this.productList
  }
  getProductInfo(id:number){
    return this.productList.get(id)
  }
  addProduct(id:number){
    if(this.shoppingCart.has(id)){
      let info = this.shoppingCart.get(id)
      this.shoppingCart.set(id, [info?.[0] as Product, info?.[1] as number +1])
    }
    else{
      let product = this.productList.get(id) as Product
      this.shoppingCart.set(id, [product, 1])
    }
    
  }
  
  updateShopping(shopping: Map<number, [Product,number]>){
        this.shoppingCart = shopping
  }

  getNumberProducts(){
    return this.shoppingCart.size
  }
  getShoppingCart(): Map<number, [Product,number]>{
    return this.shoppingCart
  }
  clearShoppingCart(){
    this.shoppingCart = new Map();
  }
}
interface Product{
  id:number,
  img:string, 
  brand:string, 
  price:number, 
  description:string
}