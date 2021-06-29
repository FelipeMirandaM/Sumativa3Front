import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  cUser = "user";
  cPwd = "user";
  alert:boolean = false
  alertUser!: string;


  user = new FormControl('');
  pwd = new FormControl('');


  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  validar(){
        if(this.user.value == this.cUser && this.pwd.value == this.cPwd){
          this.alertUser = "";
          this.router.navigate(['principal']);
          this.alert = false
        }
        
        else{
          this.alert = true
          this.alertUser = "Usuario o password incorrecto";
        }
  }

}
