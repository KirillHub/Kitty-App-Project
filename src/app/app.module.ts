import { HttpClientModule } from '@angular/common/http';
import { NgModule, isDevMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { RatingModule } from 'ngx-bootstrap/rating';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalErrorComponent } from './components/error-data/error-data.component';

import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { VotePageModule } from './pages/vote-page/vote-page.module';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { appReducer } from './store/app.reducer';
import { EntityDataModule, EntityDataService } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { CatBreedsDataService } from './services/cat-breeds-data.service';
import { CatBreedsResolver } from './app.resolver';


@NgModule({
	declarations: [
		AppComponent,
		GlobalErrorComponent,
		LoadingSpinnerComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		AngularSvgIconModule.forRoot(),
		HttpClientModule,
		StoreModule.forRoot(appReducer),
		EffectsModule.forRoot([]),
		StoreDevtoolsModule.instrument({
			maxAge: 25, logOnly: !isDevMode()
		}),
		EntityDataModule.forRoot(entityConfig),
	],
	exports: [],
	providers: [CatBreedsDataService, CatBreedsResolver],
	bootstrap: [AppComponent]
})

export class AppModule {
	constructor(
		entityDateService: EntityDataService,
		catBreedsDataService: CatBreedsDataService
	) {
		entityDateService.registerService('CatBreeds', catBreedsDataService)
	}
}
