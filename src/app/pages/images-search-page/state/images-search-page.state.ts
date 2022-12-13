import { TCatImage } from "src/app/models/cats";
import { TCatsCategories } from "src/app/models/catsCategories";
import TUserSettingsParam from "src/app/models/userSettingsParam";

export interface ImagesSearchState {
  userSettingsParam: TUserSettingsParam,
  catCategories: TCatsCategories[] | [],
  loadingCatImages: TCatImage[] | []
}

export const initialState: ImagesSearchState = {
  userSettingsParam: {
    limit: 6,             // default 6
    has_breeds: 0,        // if 0, does not load array breeds for currentBreed, 1 -> load
    mime_types: "png",    // later randomize this extensions "png, jpg, gif"
    category_ids: -1,     // to cancel the condition, I assign this value.
    breeds_ids: -1        //to cancel the condition, I assign this value.
  },
  catCategories: [],
  loadingCatImages: []
};
