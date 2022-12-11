import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  //** implement homePage */

  {
    path: 'vote',
    loadChildren: () => import('./pages/vote-page/vote-page.module')
      .then(module => module.VotePageModule)
  },
  {
    path: 'breeds',
    loadChildren: () => import('./pages/breeds-page/breeds-page.module')
      .then(module => module.BreedsPageModule)
  },
  {
    path: 'images-search',
    loadChildren: () => import('./pages/images-search-page/images-search-page.module').
      then(module => module.ImagesSearchPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }


