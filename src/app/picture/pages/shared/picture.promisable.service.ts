import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MAX_RETRIES, API_ENDPOINT, DEFAULT_URL, RETRY_INTERVAL, FLOOR, CEIL } from './picture. const';
import { randomInt } from '@shared/helpers';

@Injectable()
export class PromisablePictureService {
    private cache: SafeUrl;

    constructor(private domSanitizer: DomSanitizer) { }

    get picture(): SafeUrl {
      return this.cache;
    }

    async requestPicture() {
      if (this.cache) { return; }
      try {
        const response = await this.fetchWithRetry();
        const blob = await response.blob();
        this.cache = this.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob));
      } catch (err) {
        console.log(err);
      }
    }

    private async fetchWithRetry(n = MAX_RETRIES) {
        try {
            return await fetch(`${API_ENDPOINT}${randomInt(FLOOR, CEIL)}`);
        } catch (err) {
            if (!this.cache) {
              this.cache = this.domSanitizer.bypassSecurityTrustUrl(DEFAULT_URL);
            }
            if (n === 1) { throw err; }
            await new Promise(resolve => setTimeout(resolve, RETRY_INTERVAL));
            return await this.fetchWithRetry(n - 1);
        }
    }
}
