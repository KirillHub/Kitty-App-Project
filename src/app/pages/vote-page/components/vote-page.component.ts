
import { TCatImage } from '../../../models/cats';
import { Component, OnInit } from '@angular/core';
import { CatsService } from 'src/app/components/services/cats.service';
import { tap, Observable, map, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { TAppState } from 'src/app/state/app.state';

@Component({
	selector: 'app-vote-page',
	templateUrl: './vote-page.component.html',
	styleUrls: ['./vote-page.component.scss']
})
export class VotePageComponent implements OnInit {

  // catImage$?: Observable<TCatImage[]>;

	constructor(private catsService: CatsService,
		private store: Store<TAppState>) { }

	catRandomImage: TCatImage[] = [];
	loading = false;
	term = '';


	nextCatImage(buttonEventActive: boolean) {

		if (buttonEventActive) {
			this.catsService.getCatRandomImagesForVote().pipe(
				tap(() => this.loading = false)
			).subscribe(catImage => this.catRandomImage = catImage);
		};
	}

	ngOnInit(): void {
		 this.loading = true;

		 this.catsService.getCatRandomImagesForVote().pipe(
			tap(() => this.loading = false)
		 ).subscribe(catImage => this.catRandomImage = catImage)

		// this.store.dispatch({ type: '[Cat Random Image] Load Cat Image' }) //! работающая версия подгрузки
	};

}
