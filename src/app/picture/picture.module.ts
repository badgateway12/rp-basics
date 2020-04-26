import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import * as fromComponents from './pages';

import { PictureRoutingModule } from './picture-routing.module';

@NgModule({
  declarations: [fromComponents.components],
  imports: [CommonModule, SharedModule, PictureRoutingModule]
})
export class PictureModule {}
