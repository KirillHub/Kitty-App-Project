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
import { loadCategories, loadCategoriesSuccess, loadCatImagesAction, loadCatImagesSuccessAction } from './images-search-page.actions';
import TUserSettingsParam from 'src/app/models/userSettingsParam';
import { selectUserSearchSettings } from './images-search-page.selectors';

@Injectable()

export class ImagesSearchEffects {
  constructor(
    private actions$: Actions,
    private catService: CatsService,
    private store: Store<AppState>,
    private errorService: ErrorService
  ) { }

  loadCategories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadCategories),
      mergeMap(action =>
        this.catService.getCatsCategories().pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            return loadCategoriesSuccess({ catCategories: data })
          }),
          catchError((error: HttpErrorResponse) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            this.errorService.handle(error.message)
            return throwError(() => error.message)
          })
        )
      )
    )
  });

  loadCatImagesByUserSettings$ = createEffect(() => {
    let userSettings: TUserSettingsParam;
    this.store.select(selectUserSearchSettings).subscribe(
      settings => userSettings = { ...settings }
    )

    return this.actions$.pipe(
      ofType(loadCatImagesAction),
      mergeMap(() => {

        return this.catService.getCatsImagesByUserSettings(userSettings).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            return loadCatImagesSuccessAction({ catImages: data });
          }),
          catchError((error: HttpErrorResponse) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            this.errorService.handle(error.message)
            return throwError(() => error.message)
          })
        )
      })
    )
  })
}

