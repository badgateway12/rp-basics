import { Observable } from 'rxjs';
import { throwIfEmpty, catchError } from 'rxjs/operators';

export const switchIfEmpty = <I, O>(to: Observable<O>) => (o: Observable<I>) => o.pipe(
  throwIfEmpty(),
  catchError(() => to),
);
