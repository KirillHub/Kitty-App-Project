import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ImagesSearchState } from "./images-search-page.state";

export const IMAGES_SEARCH_NAME = 'images-search';

export const selectFeature =
  createFeatureSelector<ImagesSearchState>(IMAGES_SEARCH_NAME);

export const selectDefaulfSearchSettings = createSelector(
  selectFeature,
  state => state.defaultUserSettingsParam
);
