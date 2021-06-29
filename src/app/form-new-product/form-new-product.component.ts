import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-new-product',
  templateUrl: './form-new-product.component.html',
  styleUrls: ['./form-new-product.component.css']
})
export class FormNewProductComponent implements OnInit {
  submitted:boolean = false;
  newProduct!: any;
  @Output() newItemEvent = new EventEmitter<any>();

  formNewProduct = new FormGroup({
      url: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required])
      
  })

  get f(){
    return this.formNewProduct.controls;
  }
  onSubmit(){
    this.submitted = true;

    if(this.formNewProduct.value.url !== "" && this.formNewProduct.value.name !== "" && this.formNewProduct.value.price !== "" && this.formNewProduct.value.type !== ""){
      this.newProduct = {url: this.formNewProduct.value.url,
        name:this.formNewProduct.value.name,
        type: this.formNewProduct.value.type,
        price:this.formNewProduct.value.price}
        this.newItemEvent.emit(this.newProduct) 
        this.submitted = false;
        this.formNewProduct.reset()
    }

          
                 
  }


  constructor() { }

  ngOnInit(): void {
  }



}
interface Product{
  url:string 
  name:string
  type: string
  price:number
}