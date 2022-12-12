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

@Injectable()

export class ImagesSearchEffects {
  constructor(
    private actions$: Actions,
    private postService: CatsService,
    private store: Store<AppState>,
    private errorService: ErrorService
  ) { }



}



/*
  loadImage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadImage),
      mergeMap(action =>
        this.postService.getCatRandomImagesForVote().pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            return loadImageSuccess({ catImage: data })
          }),
          catchError((error: HttpErrorResponse) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            this.errorService.handle(error.message)
            return throwError(() => error.message)
          })
        )
      )
    )
  })
*/
