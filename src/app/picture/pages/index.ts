import { PictureComponent } from './picture/picture.component';
import { PictureObservableComponent } from './components/picture_observable/picture.component';
import { PicturePromisableComponent } from './components/picture_promisable/picture.component';

export const components: any[] = [
    PictureComponent,
    PictureObservableComponent,
    PicturePromisableComponent
];

export * from './picture/picture.component';
export * from './components/picture_observable/picture.component';
export * from './components/picture_promisable/picture.component';
