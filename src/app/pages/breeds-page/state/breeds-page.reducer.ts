import { createReducer, on } from "@ngrx/store";
import { catBreedAction, getCatBreedsId, loadImageByBreedSuccess } from "./breeds-page.actions";
import { initialState } from "./breeds-page.state";


export const breedsReducer = createReducer(
  initialState,
  on(catBreedAction, (state, action) => ({
    ...state,
    catBreed: action.catBreed
  })
  ),
  on(getCatBreedsId, (state, action) => ({ 
    ...state,
    catBreedId: action.catId
  })),

  on(loadImageByBreedSuccess, (state, action) => ({
    ...state,
    catImage: action.catImage
  }))
);
