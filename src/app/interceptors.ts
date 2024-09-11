import {  HttpHandlerFn, HttpRequest } from "@angular/common/http";

export function  loggingInterceptor(request:HttpRequest<unknown>, next:HttpHandlerFn){
    // const req=request.clone({
    //     headers:request.headers.set('Access-Control-Allow-Origin','*')
    // })
    console.log(request, next)
return next(request)
}