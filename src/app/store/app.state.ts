import { SHARED_STATE_NAME } from "./Shared/shared.selector";
import { SharedState } from "./Shared/shared.state";

export interface AppState {
  [SHARED_STATE_NAME]: SharedState
}

