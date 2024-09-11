import { inject } from "@angular/core"
import { AuthService } from "./admin/auth.service"
import { CanActivateFn, Router } from "@angular/router";

export const canActivate:CanActivateFn=()=>{
   let router=inject(Router)
let service=inject(AuthService);
if(!service.isAuthanticated()){
   router.navigate(['admin'])
   return service.isAuthanticated()
} else return service.isAuthanticated()
}