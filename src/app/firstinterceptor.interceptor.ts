import { HttpInterceptorFn } from '@angular/common/http';

export const firstinterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
