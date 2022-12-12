import { createAction, props } from "@ngrx/store";
import { TCatImage } from "src/app/models/cats";

export const LOAD_IMAGE_BY_BREED = '[breeds page] load cat image by breed';
export const LOAD_IMAGE_SUCCESS = '[breeds page] load cat image by breed success';

export const CAT_BREED_ID = '[breeds page] get cat breed id';

export const loadImageByBreed = createAction(LOAD_IMAGE_BY_BREED);
export const loadImageByBreedSuccess = createAction(LOAD_IMAGE_SUCCESS,
  props<{ getCatImageByBreed: TCatImage[] }>()
);


export const getCatBreedId = createAction(CAT_BREED_ID,
  props<{ id: string }>()
);
