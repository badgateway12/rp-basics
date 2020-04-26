import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ObservablePictureService } from '../../shared/picture.observable.service';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'rpb-picture-observable',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss'],
  providers: [ObservablePictureService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PictureObservableComponent {
  constructor(private pictureService: ObservablePictureService) {}

  get picture$(): Observable<SafeUrl> {
      return this.pictureService.picture$;
  }

  requestPicture() {
    this.pictureService.requestPicture();
  }
}
