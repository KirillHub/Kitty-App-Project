import { createReducer, on } from "@ngrx/store";
import { actualUserSettingForSearchImages } from "./images-search-page.actions";
import { initialState } from "./images-search-page.state";

export const imagesSearchReducer = createReducer(
  initialState,
  on(actualUserSettingForSearchImages, (state, action) => {
    return {
      ...state,
      defaultUserSettingsParam: action.userSettings
    }
  })
);
