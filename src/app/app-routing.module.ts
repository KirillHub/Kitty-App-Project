import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VotePageComponent } from './pages/vote-page/components/vote-page.component';

const routes: Routes = [

  {
    path: '', component: VotePageComponent
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


