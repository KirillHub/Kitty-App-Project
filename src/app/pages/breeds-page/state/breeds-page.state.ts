import { TCat, TCatImage } from "src/app/models/cats";

export interface BreedsState {
  catBreed: TCat[] | [],
  catImage: TCatImage[] | [],
  catBreedId: string
}

export const initialState: BreedsState = {
  catBreed: [],
  catImage: [],
  catBreedId: 'abys'
}
