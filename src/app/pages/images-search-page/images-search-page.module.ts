import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AngularSvgIconModule } from "angular-svg-icon";
import { ImagesSearchCatCategoriesComponent } from "src/app/components/images-search/images-search-cat-categories/images-search-cat-categories.component";
import { ImagesSearchCatImagesComponent } from "src/app/components/images-search/images-search-cat-images/images-search-cat-images.component";
import { ImagesSearchFooterComponent } from "src/app/components/images-search/images-search-footer/images-search-footer.component";
import { ImagesSearchComponent } from "src/app/components/images-search/images-search.component";
import { ImagesSearchPageComponent } from "./components/images-search-page.component";
import { ImageSearchRoutingModule } from "./image-search-routing.module";
import { ImagesSearchEffects } from "./state/images-search-page.effects";
import { imagesSearchReducer } from "./state/images-search-page.reducer";
import { IMAGES_SEARCH_NAME } from "./state/images-search-page.selectors";

@NgModule({
  imports: [
    CommonModule,
    AngularSvgIconModule.forRoot(),
    ImageSearchRoutingModule,
    StoreModule.forFeature(IMAGES_SEARCH_NAME, imagesSearchReducer),
    EffectsModule.forFeature([ImagesSearchEffects])
  ],
  declarations: [
    ImagesSearchComponent,
    ImagesSearchPageComponent,
    ImagesSearchCatImagesComponent,
    ImagesSearchCatCategoriesComponent,
    ImagesSearchFooterComponent,
  ],
  exports: []
})

export class ImagesSearchPageModule { }
