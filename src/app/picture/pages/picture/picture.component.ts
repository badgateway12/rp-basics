import { Component } from '@angular/core';
import { ObservablePictureService } from '../shared/picture.observable.service';
import { PromisablePictureService } from '../shared/picture.promisable.service';

@Component({
  selector: 'rpb-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss'],
  providers: [ObservablePictureService, PromisablePictureService]
})
export class PictureComponent {}
