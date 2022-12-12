import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatBreedsResolver } from './app.resolver';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/vote-page/vote-page.module')
      .then(module => module.VotePageModule)
  },
  {
    path: 'breeds',
    resolve: { catBreeds: CatBreedsResolver }, 
    loadChildren: () => import('./pages/breeds-page/breeds-page.module')
      .then(module => module.BreedsPageModule)
  },
  {
    path: 'images-search',
    resolve: { catBreeds: CatBreedsResolver },
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


