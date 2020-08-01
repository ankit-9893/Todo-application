import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { BasicAuthService } from '../basic-auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(private basicAuthService: BasicAuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // let username = 'user98';
    // let password = 'dummy';
    // let basicAuthHeaderString = 'Basic' + window.btoa(username + password);

    let basicAuthString = this.basicAuthService.getAuthenticatedToken();
    let username = this.basicAuthService.getAuthenticatedUser();

    if (basicAuthString && username) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthString
        }
      })
    }
    return next.handle(request);
  }
}
