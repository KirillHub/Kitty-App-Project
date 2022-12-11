import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TCatImage } from "src/app/models/cats";
import { VoteState } from "./vote-page.state";

export const VOTE_STATE_NAME = 'vote';

export const selectFeature =
  createFeatureSelector<VoteState>(VOTE_STATE_NAME);

export const selectCatImage = createSelector(
  selectFeature,
  state => state.catImage
);


