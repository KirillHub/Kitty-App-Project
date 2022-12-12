import { createAction, props } from "@ngrx/store";
import TUserSettingsParam from "src/app/models/userSettingsParam";

const USER_SETTINGS = '[images search] user settings';

export const actualUserSettingForSearchImages = createAction(
  USER_SETTINGS,
  props <{userSettings: TUserSettingsParam}> ()
);
