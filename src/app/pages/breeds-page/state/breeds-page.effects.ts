import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { throwError } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs';
import { CatsService } from 'src/app/services/cats.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { setLoadingSpinner } from 'src/app/store/Shared/shared.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from 'src/app/services/error.service';
import { selectCatsId } from './breeds-page.selectors';
import { loadImageByBreed, loadImageByBreedSuccess } from './breeds-page.actions';

@Injectable()

export class BreedsEffects {
  constructor(
    private actions$: Actions,
    private catsService: CatsService,
    private store: Store<AppState>,
    private errorService: ErrorService
  ) { }

  loadCatImageByBreedId$ = createEffect(() => {
    let catsID: string;
    this.store.select(selectCatsId).subscribe(id => catsID = id)

    return this.actions$.pipe(
      ofType(loadImageByBreed),
      mergeMap(() => {

        return this.catsService.getCatImagesByBreed(catsID, 5).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            return loadImageByBreedSuccess({ catImage: data })
          }),
          catchError((error: HttpErrorResponse) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            this.errorService.handle(error.message)
            return throwError(() => error.message)
          })
        )
      }
      )
    )
  })

}

