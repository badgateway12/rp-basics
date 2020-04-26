import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { randomInt$ } from '@shared/helpers';
import { switchIfEmpty } from '@shared/operators';
import { of, Observable, merge } from 'rxjs';
import { map, mergeMap, retryWhen, delay, take, shareReplay } from 'rxjs/operators';
import { FLOOR, CEIL, API_ENDPOINT, DEFAULT_URL, RETRY_INTERVAL, MAX_RETRIES, CACHE_SIZE } from './picture. const';


@Injectable()
export class ObservablePictureService {
    private cache$: Observable<SafeUrl>;

    constructor(private http: HttpClient, private domSanitizer: DomSanitizer) { }

    get picture$(): Observable<SafeUrl> {
        return this.cache$;
    }

    requestPicture(): void {
        if (this.cache$) { return; }

        const requestOnce$ = randomInt$(FLOOR, CEIL).pipe(
          mergeMap((int) => this.http.get(`${API_ENDPOINT}${int}`, { responseType: 'blob' })),
          map(URL.createObjectURL),
          map(this.domSanitizer.bypassSecurityTrustUrl),
        );
        const default$ = of(DEFAULT_URL).pipe(map(this.domSanitizer.bypassSecurityTrustUrl));
        const retry$ = requestOnce$.pipe(retryWhen((fail) => fail.pipe(delay(RETRY_INTERVAL), take(MAX_RETRIES))));

        this.cache$ = requestOnce$.pipe(switchIfEmpty(merge(default$, retry$)), shareReplay(CACHE_SIZE));
    }
}
