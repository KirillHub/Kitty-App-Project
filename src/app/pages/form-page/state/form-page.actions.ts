import { createAction, props } from "@ngrx/store";

export const CAT_BREED = '[form page] user-entered cat breed';

export const setUserEnteredCatBreedAction = createAction(CAT_BREED,
  props<{ updateUserEnteredCatBreed: string }>()
);

