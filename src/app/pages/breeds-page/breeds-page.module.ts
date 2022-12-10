import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AngularSvgIconModule } from "angular-svg-icon";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { RatingModule } from "ngx-bootstrap/rating";
import { BreedsComponent } from "src/app/components/breeds/breeds.component";
import { DemoRatingCustomComponent } from "src/app/components/rating-custom/rating-custom.component";
import { BreedsPageComponent } from "./components/breeds-page.component";


const routes: Routes = [
  {
    path: '',
    component: BreedsPageComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    // BreedsRoutingModule
    RouterModule.forChild(routes),

    AngularSvgIconModule.forRoot(),
    CarouselModule.forRoot(),
		RatingModule.forRoot(),
  ],
  declarations: [
    BreedsComponent,
    BreedsPageComponent,
    DemoRatingCustomComponent
  ],
  exports: [RouterModule]
})

export class BreedsPageModule { }
