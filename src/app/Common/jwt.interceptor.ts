import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

//This adds a jwt token to the http request

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const newHeaders= new HttpHeaders()
            //.set('Accept-Language', "en-US"); //Use additional .set() to add additional headers to the request
    var newRequest = request.clone({
      headers : newHeaders
    });
    return next.handle(newRequest);
  }
}
