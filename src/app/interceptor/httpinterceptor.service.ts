import { Injectable } from '@angular/core';
import {HttpInterceptor,HttpRequest,HttpHandler,HttpEvent} from '@angular/common/http'; 
import {Observable} from 'rxjs/Observable'

@Injectable()
export class HttpinterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    console.log(req);
    let newRequest= req.clone({headers: req.headers.set('token', 'thisistoken').set('anothertoken', 'newtoken')})
    return next.handle(newRequest);
  }
}
