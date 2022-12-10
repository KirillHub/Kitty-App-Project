import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AngularSvgIconModule } from "angular-svg-icon";
import { ImagesSearchComponent } from "src/app/components/images-search/images-search.component";
import { ImagesSearchPageComponent } from "./components/images-search-page.component";

const routes: Routes = [
  {
    path: '', component: ImagesSearchPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    AngularSvgIconModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  declarations: [
    ImagesSearchComponent,
    ImagesSearchPageComponent,
    //
  ],
  exports: []
})

export class ImagesSearchPageModule { }
