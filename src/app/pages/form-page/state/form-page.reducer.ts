import { createReducer, on } from "@ngrx/store";
import { setUserEnteredCatBreedAction } from "./form-page.actions";

import { initialState } from "./form-page.state";

export const formReducer = createReducer(
  initialState,
  on(setUserEnteredCatBreedAction, (state, action) => ({
    ...state,
    userEnteredCatBreed: action.updateUserEnteredCatBreed
  }))
);
