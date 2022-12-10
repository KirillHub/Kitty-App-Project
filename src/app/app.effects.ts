import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";


@Injectable()

export class AppEffects{
  constructor(private actions$: Actions){}

 /*
  updatedData$ = createEffect(
    () => this.actions$.pipe(
      ofType(
        -> сюда добавлять функции, или св-ва редюсера, за которыми
        будем следить
       )
      )
      )

       map(() => changeUpdatedAt({ updatedAt: Date.now() })) //? далее мы перебераем все action's внутри

       , { dispatch: false }); // при создании данного компонента лучше юзать dispatch: false
 */
}
