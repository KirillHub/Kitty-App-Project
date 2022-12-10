import { CatsService } from '../../../components/services/cats.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs';


@Injectable()

export class CatRandomImageEffect {
	constructor(
		private actions$: Actions,
		private catsServise: CatsService) { }

	loadRamdonCatImage$ = createEffect(() => this.actions$.pipe(
		ofType('[Cat Random Image] Load Cat Image'),
		mergeMap(() => this.catsServise.getCatRandomImagesForVote()
			.pipe(
				map(catImg => ({
					type: '[Cats API] Cat Image Loaded Success',
					payload: catImg
				})),
				catchError(() => of({ type: '[Cats API] Cat Image Loaded Error' }))
			))
	), { dispatch: false }
	);

}
