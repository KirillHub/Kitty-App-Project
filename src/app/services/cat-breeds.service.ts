import { TCat } from '../models/cats';
import { Injectable } from '@angular/core';
import {
  EntityActionOptions,
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable({
  providedIn: 'root',
})

export class CatBreedsService extends EntityCollectionServiceBase<TCat> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('CatBreeds', serviceElementsFactory);
  };

}
