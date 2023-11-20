import { Injectable, NgModule } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class KeyInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const key = environment.apiKey;

    let dupReq: any;
    if (!!key) {
      dupReq = req.clone({
        headers: req.headers.set('X-Api-Key', `${key}`),
      });
    }
    return next.handle(dupReq);
  }
}

@NgModule({})
export class Interceptor {}
