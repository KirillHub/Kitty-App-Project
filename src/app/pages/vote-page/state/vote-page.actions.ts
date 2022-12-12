import { createAction, props } from "@ngrx/store";
import { TCatImage } from "src/app/models/cats";

export const LOAD_IMAGE = '[vote page] load image';
export const LOAD_IMAGE_SUCCESS = '[vote page] load image success';

export const loadImage = createAction(LOAD_IMAGE);
export const loadImageSuccess = createAction(
  LOAD_IMAGE_SUCCESS,
  props<{ catImage: TCatImage[] }>()
);
