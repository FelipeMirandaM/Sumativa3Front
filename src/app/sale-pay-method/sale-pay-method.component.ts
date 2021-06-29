import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-sale-pay-method',
  templateUrl: './sale-pay-method.component.html',
  styleUrls: ['./sale-pay-method.component.css']
})
export class SalePayMethodComponent implements OnInit {

  submitted:boolean = false
  cvcValid:boolean = false
  expDate:boolean = false
  cardValid:boolean = false

  formPayMethodInfo = new FormGroup({
    cardType: new FormControl('', [Validators.required]),
    cardNumber: new FormControl('', [Validators.required]),
    cardName: new FormControl('', [Validators.required]),
    cardExpire: new FormControl('', [Validators.required]),
    cardCVC: new FormControl('', [Validators.required]),
  });

  reset() {
    this.submitted = false;
  }

  get f() {
    return this.formPayMethodInfo.controls;
  }

  constructor(private shoppingCart: ShoppingCartService, public iziToast: Ng2IzitoastService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){

    let error = false
    this.submitted = true;
    this.cvcValid = false
    this.expDate = false
    this.cardValid = false
    if (this.formPayMethodInfo.value.cardCVC.toString().length  != 3) {
      error = true
      this.cvcValid = true
      this.iziToast.show({
        title: 'el CVC debe ser de tres digitos',
        color: '#FFD8D6',
        timeout: 3000,
        position: 'topRight',
      });
    }
    if (this.validateDate(this.formPayMethodInfo.value.cardExpire)) {
      this.expDate = true
      error = true
      this.iziToast.show({
        title: 'la fecha de expericación no es valida o ya expiró',
        color: '#FFD8D6',
        timeout: 3000,
        position: 'topRight',
      });
    }
    if (this.formPayMethodInfo.value.cardName  == "") {
      error = true
      this.iziToast.show({
        title: 'El nombre del titular no puede estar vacio',
        color: '#FFD8D6',
        timeout: 3000,
        position: 'topRight',
      });
    }
    if (this.formPayMethodInfo.value.cardNumber== "" && !(this.formPayMethodInfo.value.cardNumber.toString().length >=13 &&  this.formPayMethodInfo.value.cardNumber.toString().length <=19)) {
      this.cardValid = true
      error = true
      this.iziToast.show({
        title: 'El numero de targeta no es valido',
        color: '#FFD8D6',
        timeout: 3000,
        position: 'topRight',
      });
    }
    if (this.formPayMethodInfo.value.cardType  == "") {
      error = true
      this.iziToast.show({
        title: 'Debes seleccionar el tipo de targeta',
        color: '#FFD8D6',
        timeout: 3000,
        position: 'topRight',
      });
    }
    if(!error){
      this.shoppingCart.clearShoppingCart()
      this.iziToast.show({
        title: 'Orden Confirmada, en 3 dias tendrás tus productos',
        color: '#d6ffd8',
        timeout: 3000,
        position: 'topRight',
      });
      this.router.navigate(['/principal/home'], {relativeTo:this.route});
   }

  }
  validateDate(date:String){
      if(date == ""){
        return true
      }
      else{
        let month = parseInt(date.split("/")[0].replace(/[^0-9 ]/g, ""))
        let aux = date.split("/")[1]
        if(aux == undefined){
            return true
            
        }
        let year = parseInt(aux.replace(/[^0-9 ]/g, ""))
        if(!(month >0 && 12>=month) || year >2050 || month.toString().length>2 || year.toString().length>2){
            return true
        }

        let today = new Date();
        var mm = parseInt(String(today.getMonth() + 1).padStart(2, '0'));
        let currYear = parseInt(today.getFullYear().toString().substr(-2));
        if(year<currYear || (year==currYear && month<=mm)){
          return true
        }
      }

      return false
  }


}
