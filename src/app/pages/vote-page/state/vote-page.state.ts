import { TCatImage } from "src/app/models/cats";

export interface VoteState {
  catImage: TCatImage[] | [];
}

export const initialState: VoteState = {
  catImage: []
}
