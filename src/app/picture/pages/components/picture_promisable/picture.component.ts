import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { PromisablePictureService } from '../../shared/picture.promisable.service';

@Component({
  selector: 'rpb-picture-promisable',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss'],
  providers: [PromisablePictureService],
})
export class PicturePromisableComponent {
  // we want to call requestPicture only once
  private requestDone = false;

  constructor(private pictureService: PromisablePictureService) {}

  get picture(): SafeUrl {
      return this.pictureService.picture;
  }

  requestPicture() {
    if (this.requestDone) { return; }
    this.pictureService.requestPicture();
    this.requestDone = true;
  }
}
