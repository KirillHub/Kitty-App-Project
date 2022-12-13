import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BreedsState } from "./breeds-page.state";

export const BREEDS_STATE_NAME = 'breeds';

export const selectFeature =
	createFeatureSelector<BreedsState>(BREEDS_STATE_NAME);


export const selectCatInfoByBreed = createSelector(
	selectFeature,
	state => state.catBreed
);


export const selectCatsId = createSelector(
	selectFeature,
	state => state.catBreedId
);
export const selectCatImageByBreed = createSelector(
	selectFeature,
	state => state.catImage
);

