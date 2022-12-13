import { createAction, props } from "@ngrx/store";
import { TCat, TCatImage } from "src/app/models/cats";

export const CAT_BREED = '[breeds page] info about a cat by breed';
export const CAT_IMAGE_BY_ID = '[breeds page] cat image by selected id';

export const LOAD_IMAGE = '[breeds page] load image';
export const LOAD_IMAGE_SUCCESS = '[breeds page] load image success';

export const catBreedAction = createAction(CAT_BREED,
  props<{ catBreed: TCat[] }>()
);

export const getCatBreedsId = createAction(CAT_IMAGE_BY_ID,
  props<{ catId: string }>()
);


export const loadImageByBreed = createAction(LOAD_IMAGE);
export const loadImageByBreedSuccess = createAction(
  LOAD_IMAGE_SUCCESS,
  props<{ catImage: TCatImage[] }>()
);



