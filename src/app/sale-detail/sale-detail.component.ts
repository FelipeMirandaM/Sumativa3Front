import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-sale-detail',
  templateUrl: './sale-detail.component.html',
  styleUrls: ['./sale-detail.component.css'],
})
export class SaleDetailComponent implements OnInit {
  productList!: Array<object>;
  shoppingList:Map<number, [Product,number]> = new Map<number, [Product,number]>()
  productNumber!:number
  subtotal!: number;
  iva!: number;
  total!: number;
  submitted: boolean = false;
  validRut:boolean = false;
  validEmail:boolean = false;
  validNumber:boolean = false;
  formUserInfo = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    codePhone: new FormControl('', [Validators.required]),
    cellPhone: new FormControl('', [Validators.required]),
    rut: new FormControl('', [Validators.required]),
  });
  get f() {
    return this.formUserInfo.controls;
  }

  constructor(private shoppingCart: ShoppingCartService, public iziToast: Ng2IzitoastService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.productNumber = this.shoppingCart.getNumberProducts()
    this.shoppingList = this.shoppingCart.getShoppingCart()
    this.reCalculate()
  }
  ngOnChanges(changes: SimpleChanges): void {}
  reCalculate(){
    this.subtotal=0
    this.productNumber = this.shoppingCart.getNumberProducts()
    this.shoppingList.forEach(element => {
      this.subtotal+=element[0].price * element[1]
      });
      this.iva = this.subtotal*0.19
      this.total = this.subtotal*1.19
}
  editar() {}
  reset() {
    this.submitted = false;
  }


  onSubmit() {
    this.validRut = false;
    this.validEmail = false;
    this.validNumber = false;
    let error = false
    if (!this.checkRut(this.formUserInfo.value.rut)) {
      error = true
      this.validRut = true;
      this.iziToast.show({
        title: 'El rut no es valido',
        color: '#FFD8D6',
        timeout: 3000,
        position: 'topRight',
      });
    }
    if (this.formUserInfo.value.cellPhone.toString().length  != 8) {
      error = true
      this.validNumber = true;
      this.iziToast.show({
        title: 'El numero de contacto debe tener 8 digitos',
        color: '#FFD8D6',
        timeout: 3000,
        position: 'topRight',
      });
    }
    if (this.formUserInfo.value.codePhone == '') {
      error = true
      this.iziToast.show({
        title: 'El codigo no puede estar vacio',
        color: '#FFD8D6',
        timeout: 3000,
        position: 'topRight',
      });
    }
    if (!this.validateEmail(this.formUserInfo.value.email)) {
      error = true
      this.validEmail = true;
      this.iziToast.show({
        title: 'El correo no es valido',
        color: '#FFD8D6',
        timeout: 3000,
        position: 'topRight',
      });
    }
    if (this.formUserInfo.value.lastName == '') {
      error = true
      this.iziToast.show({
        title: 'El apellido no puede estar vacio',
        color: '#FFD8D6',
        timeout: 3000,
        position: 'topRight',
      });
    }
    if (this.formUserInfo.value.name == '') {
      error = true
      this.iziToast.show({
        title: 'El nombre no puede estar vacio',
        color: '#FFD8D6',
        timeout: 3000,
        position: 'topRight',
      });
    }
    if(!error){
       this.router.navigate(['../saleDirection'], {relativeTo:this.route});
    }
    this.submitted = true;

  }
  checkRut(rut: string) {
    var valor = rut.replace('.', '');
    // Despejar Gui??n
    valor = valor.replace('-', '');

    // Aislar Cuerpo y D??gito Verificador
    let cuerpo = valor.slice(0, -1);
    let dv = valor.slice(-1).toUpperCase();

    // Formatear RUN
    rut = cuerpo + '-' + dv;

    // Si no cumple con el m??nimo ej. (n.nnn.nnn)
    if (cuerpo.length < 7) {
      return false;
    }

    // Calcular D??gito Verificador
    let suma = 0;
    let multiplo = 2;

    // Para cada d??gito del Cuerpo
    for (let i = 1; i <= cuerpo.length; i++) {

      // Obtener su Producto con el M??ltiplo Correspondiente
      let index = multiplo * parseInt(valor.charAt(cuerpo.length - i))

      // Sumar al Contador General
      suma = suma + index;

      // Consolidar M??ltiplo dentro del rango [2,7]
      if (multiplo < 7) {
        multiplo = multiplo + 1;
      } else {
        multiplo = 2;
      }
    }

    // Calcular D??gito Verificador en base al M??dulo 11
    let dvEsperado = 11 - (suma % 11);

    // Casos Especiales (0 y K)
    dv = dv == 'K' ? '10' : dv;
    dv = dv == '0' ? '11' : dv;

    // Validar que el Cuerpo coincide con su D??gito Verificador
    if (dvEsperado != parseInt(dv)) {
      return false;
    }

    // Si todo sale bien, eliminar errores (decretar que es v??lido)
    return true;
  }
  validateEmail(email:string){
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }
  
}
interface Product{
  id:number,
  img:string, 
  brand:string, 
  price:number, 
  description:string
}