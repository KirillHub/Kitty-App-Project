import { createReducer, on } from "@ngrx/store";
import { actualUserSettingForSearchImages, loadCategoriesSuccess, loadCatImagesSuccessAction } from "./images-search-page.actions";
import { initialState } from "./images-search-page.state";

export const imagesSearchReducer = createReducer(
  initialState,
  on(actualUserSettingForSearchImages, (state, action) => {
    return {
      ...state,
      userSettingsParam: action.userSettings
    }
  }),
  on(loadCategoriesSuccess, (state, action) => ({
    ...state,
    catCategories: action.catCategories
  })),
  on(loadCatImagesSuccessAction, (state, action) => ({
    ...state,
    loadingCatImages: action.catImages
  }))
);
