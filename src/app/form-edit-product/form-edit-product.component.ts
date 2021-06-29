import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-edit-product',
  templateUrl: './form-edit-product.component.html',
  styleUrls: ['./form-edit-product.component.css']
})
export class FormEditProductComponent implements OnInit {
  submitted:boolean = false;
  @Input() currentProduct!: any;
  @Input() currentIndex!: any;
  @Output() newItemEvent = new EventEmitter<any>();
  init = false;
  newProduct!:any;
  formNewProduct!:FormGroup;
  get f(){
    return this.formNewProduct.controls;
  }
  onSubmit(){
    this.submitted = true;
    if(this.formNewProduct.value.url !== "" && this.formNewProduct.value.name !== "" && this.formNewProduct.value.price !== "" && this.formNewProduct.value.type !== ""){
      this.newProduct = { id: this.currentIndex,
                          url: this.formNewProduct.value.url,
                          name:this.formNewProduct.value.name,
                          type: this.formNewProduct.value.type,
                          price:this.formNewProduct.value.price}
        this.newItemEvent.emit(this.newProduct) 
        this.submitted = false;
    }
  }
  constructor() { }

  ngOnInit(): void {
        this.formNewProduct = new FormGroup({
          url: new FormControl(this.currentProduct.url, [Validators.required]),
          name: new FormControl(this.currentProduct.name, [Validators.required]),
          type: new FormControl(this.currentProduct.type, [Validators.required]),
          price: new FormControl(this.currentProduct.price, [Validators.required])
          
          
      })
      this.init=true
  }
  ngOnChanges(): void{
    if(this.init){
        this.formNewProduct = new FormGroup({
          url: new FormControl(this.currentProduct.url, [Validators.required]),
          name: new FormControl(this.currentProduct.name, [Validators.required]),
          type: new FormControl(this.currentProduct.type, [Validators.required]),
          price: new FormControl(this.currentProduct.price, [Validators.required])
          
      })
    }

  }

}
