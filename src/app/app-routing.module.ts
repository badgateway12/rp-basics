import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'picture',
    loadChildren: () => import('./picture/picture.module').then(m => m.PictureModule)
  },
  {
    path: '',
    redirectTo: 'picture',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
