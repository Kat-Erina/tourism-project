import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit {
form=new FormGroup({username:new FormControl("", {validators:[Validators.required]}), password:new FormControl("", {validators:[Validators.required]}) })
authService=inject(AuthService);
falseCredentials=this.authService.falseCredentials;
formInvalid=signal(false);

get adminNameValidation(){
  return this.form.controls.username.dirty&&this.form.controls.username.invalid
}

get adminPasswordValidation(){
 return this.form.controls.password.dirty&&this.form.controls.password.invalid
}

ngOnInit(): void {
  // let data=window.localStorage.getItem('response');
  // if(data){
  //   let obj=JSON.parse(data);
  //   console.log(obj.accessToken)

  // }
  this.form.valueChanges.subscribe(()=>{
    if(this.adminNameValidation&&this.adminPasswordValidation){this.formInvalid.set(this.form.invalid)}
  })
}

loginFunction(){
  if(!this.form.invalid){ 
    this.formInvalid.set(this.form.invalid);
    this.authService.handleLogIn(this.form)}
  else{this.formInvalid.set(this.form.invalid)}}
}
