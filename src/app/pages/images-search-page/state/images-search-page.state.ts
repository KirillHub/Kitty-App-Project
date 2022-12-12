import TUserSettingsParam from "src/app/models/userSettingsParam";

export interface ImagesSearchState {
  defaultUserSettingsParam: TUserSettingsParam
}

export const initialState: ImagesSearchState = {
  defaultUserSettingsParam: {
    limit: 1,             // default 6
    has_breeds: 0,        // if 0, does not load array breeds for currentBreed, 1 -> load
    mime_types: "png",    // later randomize this extensions "png, jpg, gif"
    category_ids: -1,     // to cancel the condition, I assign this value.
    breeds_ids: -1        //to cancel the condition, I assign this value.
  }


};
