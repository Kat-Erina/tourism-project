import { DestroyRef, inject, Injectable, signal } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpClient, HttpRequest, HttpResponse } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})
export class AuthService{
  request=inject(HttpClient)
  isAuthanticated=signal(false);
   error=signal(true)
    falseCredentials=signal(false);
    destroyRef=inject(DestroyRef);
router=inject(Router)

   loginFn(form:FormGroup){
    let {username, password}=form.value;
    let data={username, password};
    return this.request.post("/api/Authorization/LogIn", data, { observe: 'response' })
          }

handleLogIn(form:FormGroup){
  let subscription=this.loginFn(form).subscribe({next:(response)=>{
   if(response.status===200){
    window.localStorage.setItem('response',JSON.stringify(response?.body))
 this.isAuthanticated.set(true);
      this.router.navigate(['/admin-space'])
       }
  }, 
  error:(error)=>{ this.falseCredentials.set(!error.ok)}
}, 
)
this.destroyRef.onDestroy(()=>{subscription.unsubscribe()})}
}
  