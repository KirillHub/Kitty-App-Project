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
// import { catRandomImageFeature, RANDOM_IMAGE_KEY, _counterReducer } from './reducers/catImage.reducer';

@NgModule({
	declarations: [
		AppComponent,
		GlobalErrorComponent,
		// DemoRatingCustomComponent,
	],
	imports: [
		//ngx-bootstrap
    //!!!
		// CarouselModule.forRoot(),
		// RatingModule.forRoot(),

		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		AngularSvgIconModule.forRoot(),
		// StoreModule.forFeature(catRandomImageFeature),
		StoreModule.forRoot({ }),  // сюда добавлять новые редюсеры
		StoreModule.forRoot(reducers, {
			metaReducers
		}),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
		// EffectsModule.forRoot([CatRandomImageEffect]), // в дальшейшем эффекты переместить
		// EffectsModule.forFeature([CatRandomImageEffect])
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
