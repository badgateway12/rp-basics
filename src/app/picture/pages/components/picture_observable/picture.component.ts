import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ObservablePictureService } from '../../shared/picture.observable.service';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'rpb-picture-observable',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss'],
  providers: [ObservablePictureService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PictureObservableComponent implements OnInit {
    private requestStream$ = new Subject<void>();

    constructor(private pictureService: ObservablePictureService) { }

    public ngOnInit(): void {
      this.pipeRequestStream();
    }

    public get picture$() {
      return this.pictureService.picture$;
    }

    public requestPicture() {
        this.requestStream$.next();
    }

    // we want to call requestPicture only once
    // there is no need to unsubscribe with [first]
    private pipeRequestStream() {
      this.requestStream$.pipe(
        first(),
        map(() => this.pictureService.requestPicture())
      ).subscribe();
    }
}
