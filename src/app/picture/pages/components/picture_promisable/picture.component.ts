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
  constructor(private pictureService: PromisablePictureService) {}

  get picture(): SafeUrl {
      return this.pictureService.picture;
  }

  requestPicture() {
    this.pictureService.requestPicture();
  }
}
