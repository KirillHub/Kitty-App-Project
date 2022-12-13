import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FormState } from "./form-page.state";

export const FORM_STATE_NAME = 'form';

export const selectFeature =
  createFeatureSelector<FormState>(FORM_STATE_NAME);

export const userEnteredCatBreedSelector = createSelector(
  selectFeature,
  state => state.userEnteredCatBreed
);
