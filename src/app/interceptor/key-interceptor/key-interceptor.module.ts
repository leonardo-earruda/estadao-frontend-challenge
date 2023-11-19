import { Injectable, NgModule } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class KeyInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Variável de ambiente
    const key = '06d433bd-2ca2-4883-9431-e9099ea65930';

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
