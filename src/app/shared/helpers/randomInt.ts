import { Observable, of } from 'rxjs';

export const randomInt$ = (floor: number, ceil: number): Observable<number> => {
    const min = Math.ceil(floor);
    const max = Math.floor(ceil);
    return of(Math.floor(Math.random() * (max - min + 1)) + min);
};

export const randomInt = (floor: number, ceil: number) => {
    const min = Math.ceil(floor);
    const max = Math.floor(ceil);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
