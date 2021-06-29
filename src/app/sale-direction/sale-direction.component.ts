import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ng2IzitoastService } from 'ng2-izitoast';

@Component({
  selector: 'app-sale-direction',
  templateUrl: './sale-direction.component.html',
  styleUrls: ['./sale-direction.component.css']
})
export class SaleDirectionComponent implements OnInit {

  submitted:boolean = false;
  postalValid:boolean = false;
  formDirectionInfo = new FormGroup({
    country: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required]),
    streetNumber: new FormControl('', [Validators.required]),
    number: new FormControl('', [Validators.required]),
    postalCode: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.formDirectionInfo.controls;
  }

  reset() {
    this.submitted = false;
  }

  constructor(public iziToast: Ng2IzitoastService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted = true
    this.postalValid = false
    let error = false
    if (this.formDirectionInfo.value.postalCode.toString().length  != 7) {
      error = true
      this.postalValid = true;
      this.iziToast.show({
        title: 'El codigo postal debe tener 7 digitos',
        color: '#FFD8D6',
        timeout: 3000,
        position: 'topRight',
      });
    }
    if (this.formDirectionInfo.value.number  == "") {
      error = true
      this.iziToast.show({
        title: 'El numero no puede estar vacio',
        color: '#FFD8D6',
        timeout: 3000,
        position: 'topRight',
      });
    }
    if (this.formDirectionInfo.value.streetNumber  == "") {
      error = true
      this.iziToast.show({
        title: 'EL numero de calle no puede estar vacio',
        color: '#FFD8D6',
        timeout: 3000,
        position: 'topRight',
      });
    }
    if (this.formDirectionInfo.value.street  == "") {
      error = true
      this.iziToast.show({
        title: 'La calle no puede estar vacio',
        color: '#FFD8D6',
        timeout: 3000,
        position: 'topRight',
      });
    }
    if (this.formDirectionInfo.value.city  == "") {
      error = true
      this.iziToast.show({
        title: 'La ciudad no puede estar vacio',
        color: '#FFD8D6',
        timeout: 3000,
        position: 'topRight',
      });
    }
    if (this.formDirectionInfo.value.state  == "") {
      error = true
      this.iziToast.show({
        title: 'La region no puede estar vacio',
        color: '#FFD8D6',
        timeout: 3000,
        position: 'topRight',
      });
    }
    if (this.formDirectionInfo.value.country  == "") {
      error = true
      this.iziToast.show({
        title: 'El pais no puede estar vacio',
        color: '#FFD8D6',
        timeout: 3000,
        position: 'topRight',
      });
    }
    if(!error){
       this.router.navigate(['../pay'], {relativeTo:this.route});
    }
  }

}
