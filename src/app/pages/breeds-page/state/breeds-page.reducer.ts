import { createReducer, on } from "@ngrx/store";
import { initialState } from "./breeds-page.state";
import { loadImageByBreedSuccess } from "./breeds-page.actions";


export const breedsReducer = createReducer(
	initialState,
	on(loadImageByBreedSuccess, (state, action) => {
		return {
			...state,
			catImageByBreed: action.getCatImageByBreed
		}
	})
);
