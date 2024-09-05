import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit {
form=new FormGroup({adminName:new FormControl("", {validators:[Validators.required]}), password:new FormControl("", {validators:[Validators.required]}) })
formInvalid=false;
router=inject(Router);
route=inject(ActivatedRoute);
authService=inject(AuthService);
falseCredentials=false;
get adminNameValidation(){
  return this.form.controls.adminName.dirty&&this.form.controls.adminName.invalid
}

get adminPasswordValidation(){
 return this.form.controls.password.dirty&&this.form.controls.password.invalid
}

ngOnInit(): void {
  this.form.valueChanges.subscribe(()=>{
    // this.checkFormValidationFn();
    if(this.adminNameValidation&&this.adminPasswordValidation){this.checkFormValidationFn();}
    this.falseCredentials=false
  })
}

checkFormValidationFn(){

  this.formInvalid=this.form.invalid
}
handleLogIn(){
if(!this.form.invalid){
  let login=this.authService.loginFn(this.form)
  if(login){
   this.formInvalid=false;
  }
  else{ 
    this.falseCredentials=true;
 }
 }
 else if(this.form.invalid){
  // if(!this.adminNameValidation){this.formInvalid=true}
  // this.formInvalid=true; 
  // this.form.reset() 
}
}
}
