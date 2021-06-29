import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-product',
  templateUrl: './crud-product.component.html',
  styleUrls: ['./crud-product.component.css']
})
export class CrudProductComponent implements OnInit {
  editView:boolean = false;
  saleDet:boolean = true;
  addProd:boolean = false;
  subTotal:number = 0;
  iva:number = 0;
  total:number = 0;
  currentProduct!:Product;
  currentIndex!:number;
  productList:Array<Product> = [{url: "https://images.ctfassets.net/sa0sroutfts9/4cRiXpLgY2MRYphXDhb1F4/6f819bd33447a72218ba667a5867b35b/GO-SOLUTIONS-Recipe-Image-Cat-Skin_Coat-Care-Salmon.png"
                                ,name:"Comida para gatos premium"
                                ,type: "Alimento"
                                ,price:34990} as Product,
                                {url: "https://243440-749267-raikfcquaxqncofqfm.stackpathdns.com/tienda/13361-large_default/total-grain-free-trout-salmon-cat-food.jpg"
                                ,name:"Comida nutram 3kg total grain-free"
                                ,type: "Alimento"
                                ,price:21990} as Product,

                                {url: "https://www.hillspet.com.pe/content/dam/pim/hills/es_pe/sd/dry/sd-feline-adult-dry-productShot_zoom.jpg"
                                ,name:"Science Diet 7kg"
                                ,type: "Alimento"
                                ,price:20990} as Product,

                                {url: "https://images-na.ssl-images-amazon.com/images/I/61XQjhouSJL._AC_SX466_.jpg"
                                ,name:"Rescador con raton"
                                ,type: "Juguete"
                                ,price:13990} as Product,

                                {url: "https://www.mundodeportivo.com/r/GODO/MD/p5/ContraPortada/Imagenes/2018/04/01/Recortada/img_jgost_20180401-225015_imagenes_md_otras_fuentes_rascador_para_gatos-kopB--572x572@MundoDeportivo-Web.jpg"
                                ,name:"Casa para gatos con niveles y rascadores"
                                ,type: "Juguete"
                                ,price:51990} as Product,

                                {url: "https://ripleycl.imgix.net/http%3A%2F%2Fs3.amazonaws.com%2Fimagenes-sellers-mercado-ripley%2F2019%2F08%2F12162037%2Fjuguete-para-gatos.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=4a0d9d364af1acb0700deb4c2d404df2"
                                ,name:"Rueda con pelotitas para gatos"
                                ,type: "Juguete"
                                ,price:17990} as Product]
  shoppingCart:Array<any> = []

  constructor() { }

  ngOnInit(): void {
    console.log(this.productList)
  }
  newProduct(){
    this.editView = false;
    this.saleDet = false;
    this.addProd = true;
  }
  addProductList(product:any){

    this.productList.push(product)
  }
  addProduct(index: number){
    
    this.editView = false;
    this.saleDet = true;
    this.addProd = false;
    this.subTotal+= this.productList[index].price
    this.iva=this.subTotal*0.19
    this.total= this.subTotal + this.iva
    this.shoppingCart.push({ammount: 1, product: this.productList[index]})
  }
  edit(index: number){
    this.editView = true;
    this.saleDet = false;
    this.addProd = false;
    this.currentProduct = this.productList[index];
    this.currentIndex = index;
  }
  delete(index: number){
      this.productList.splice(index,1);
  }
  updateProduct(product:any){
    
    let updateProduct = { url: product.url,
                      name:product.name,
                      type: product.type,
                      price:product.price}
    
    this.productList[product.id] = updateProduct;
    this.editView = false;
    this.saleDet = true;
    this.addProd = false;
  }


}
interface Product{
    url:string 
    name:string
    type: string
    price:number
}
