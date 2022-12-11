import { sharedReducer } from "./Shared/shared.reducer";
import { SHARED_STATE_NAME } from "./Shared/shared.selector";

export const appReducer = {
  [SHARED_STATE_NAME]: sharedReducer
};
