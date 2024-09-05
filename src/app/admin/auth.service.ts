import { inject, Injectable } from "@angular/core";
import { adminCredentials } from "../dummyData";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Injectable({
    providedIn:'root'
})
export class AuthService{
    isAuthanticated=false;
    router=inject(Router)
   loginFn(form:FormGroup){
        if(form.value.adminName===adminCredentials.name && form.value.password===adminCredentials.password){ 
                this.isAuthanticated=true;
                this.router.navigate(['admin-space'])
                return true
                  }
                  else {
                this.isAuthanticated=false;
                return false
            }
}
}
  