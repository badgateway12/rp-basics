import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { randomInt$ } from '@shared/helpers';
import { switchIfEmpty } from '@shared/operators';
import { of, Observable, merge } from 'rxjs';
import { map, mergeMap, retryWhen, delay, take } from 'rxjs/operators';
import { FLOOR, CEIL, API_ENDPOINT, RETRY_INTERVAL, MAX_RETRIES } from './picture. const';

const DEFAULT_URL = '../../../../assets/images/default.jpeg';

@Injectable()
export class ObservablePictureService {
    private cache$: Observable<SafeUrl>;

    constructor(private http: HttpClient, private domSanitizer: DomSanitizer) { }

    get picture$(): Observable<SafeUrl> {
        return this.cache$;
    }

    requestPicture(): Observable<SafeUrl> {
        if (this.cache$) { return; }

        const requestOnce$ = randomInt$(FLOOR, CEIL).pipe(
            mergeMap((int) => this.http.get(`${API_ENDPOINT}${int}`, { responseType: 'blob' })),
            map(URL.createObjectURL),
            map(this.domSanitizer.bypassSecurityTrustUrl),
        );
        const default$ = of(DEFAULT_URL).pipe(map(this.domSanitizer.bypassSecurityTrustUrl));
        const retry$ = requestOnce$.pipe(retryWhen((fail) => fail.pipe(delay(RETRY_INTERVAL), take(MAX_RETRIES))));

        // request image for the first time and only having no responce (error /empty)
        // switch to default image, at the same time retrying api call
        this.cache$ = requestOnce$.pipe(switchIfEmpty(merge(default$, retry$)));
    }
}
