import { createAction, props } from "@ngrx/store";
import { TCatImage } from "src/app/models/cats";
import { TCatsCategories } from "src/app/models/catsCategories";
import TUserSettingsParam from "src/app/models/userSettingsParam";

export const USER_SETTINGS = '[images search page] user settings';

export const LOAD_CATEGORIES = '[images search page] load cat categories';
export const LOAD_CATEGORIES_SUCCESS = '[images search page] load cat categories success';

export const LOAD_CAT_IMAGES = '[images search page] load cat iamges by user settings';
export const LOAD_CAT_IMAGES_SUCCESS = '[images search page] load cat iamges by user settings success';

export const actualUserSettingForSearchImages = createAction(
  USER_SETTINGS,
  props<{ userSettings: TUserSettingsParam }>()
);

export const loadCategories = createAction(LOAD_CATEGORIES);
export const loadCategoriesSuccess = createAction(LOAD_CATEGORIES_SUCCESS,
  props<{ catCategories: TCatsCategories[] }>()
);


export const loadCatImagesAction = createAction(LOAD_CAT_IMAGES);
export const loadCatImagesSuccessAction = createAction(
  LOAD_CAT_IMAGES_SUCCESS,
  props<{ catImages: TCatImage[] }>()
);
