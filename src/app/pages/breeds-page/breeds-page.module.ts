import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AngularSvgIconModule } from "angular-svg-icon";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { RatingModule } from "ngx-bootstrap/rating";
import { BreedsComponent } from "src/app/components/breeds/breeds.component";
import { DemoRatingCustomComponent } from "src/app/components/rating-custom/rating-custom.component";
import { BreedsRoutingModule } from "./breeds-routing.module";
import { BreedsPageComponent } from "./components/breeds-page.component";
import { breedsReducer } from "./state/breeds-page.reducer";
import { BREEDS_STATE_NAME } from "./state/breeds-page.selectors";


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BreedsRoutingModule,
    AngularSvgIconModule.forRoot(),
    CarouselModule.forRoot(),
		RatingModule.forRoot(),
    StoreModule.forFeature(BREEDS_STATE_NAME, breedsReducer),
    EffectsModule.forFeature([])
  ],
  declarations: [
    BreedsComponent,
    BreedsPageComponent,
    DemoRatingCustomComponent
  ],
  exports: []
})

export class BreedsPageModule { }
