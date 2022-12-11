import { createReducer, on } from "@ngrx/store";
import { loadImageSuccess } from "./vote-page.actions";
import { initialState } from "./vote-page.state";


export const voteReducer = createReducer(
  initialState,
  on(loadImageSuccess, (state, action) => {
    return{
      ...state,
      catImage: action.catImage
    }
  })
);
