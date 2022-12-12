import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ImagesSearchPageComponent } from "./components/images-search-page.component";


const routes: Routes = [
  {
    path: '', component: ImagesSearchPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ImageSearchRoutingModule { }


