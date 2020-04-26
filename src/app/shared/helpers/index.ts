import { randomInt$, randomInt } from './randomInt';

export const interceptors: any[] = [
    randomInt,
    randomInt$,
];

export * from './randomInt';
