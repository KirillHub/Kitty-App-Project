import { TCat, TCatImage } from "src/app/models/cats";

export interface BreedsState {
  catImageByBreed: TCatImage[] | [],
  catBreeds: TCat[] | []
}

export const initialState: BreedsState = {
  catImageByBreed: [],
  catBreeds: []
}
