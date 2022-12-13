import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CatBreedsService } from 'src/app/services/cat-breeds.service';
import { TCat, TCatImage } from 'src/app/models/cats';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import {
  catBreedAction,
  getCatBreedsId,
  loadImageByBreed
} from 'src/app/pages/breeds-page/state/breeds-page.actions';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.scss']
})
export class BreedsComponent implements OnInit, OnDestroy {

  catBreeds$?: Observable<TCat[]>;
  subscriptions?: Subscription;
  getCatImageByBreed$?: Observable<TCatImage[]>;
  catBreeds: TCat[] = [];

  constructor(
    private catBreedsService: CatBreedsService,
    private store: Store<AppState>
  ) { }

  getCatBreedImagesById(event: Event) {
    let selectedCatBreedId = (event.target as HTMLSelectElement).value;

    this.catBreeds.filter(catImageById => {
      if (catImageById.id === selectedCatBreedId) {
        this.store.dispatch(getCatBreedsId({ catId: catImageById.id }))
        this.store.dispatch(loadImageByBreed())
      }
    });

    this.catBreeds?.filter(selectedCatBreed => {
      if (selectedCatBreed.id === selectedCatBreedId) {
        this.store.dispatch(catBreedAction({ catBreed: [selectedCatBreed] }))
      }
    });
  };

  ngOnInit(): void {
    this.catBreeds$ = this.catBreedsService.entities$;

    this.subscriptions = this.catBreeds$.subscribe(
      initialCatBreed => {
        this.store.dispatch(catBreedAction({ catBreed: [initialCatBreed[0]] }))
        this.catBreeds = initialCatBreed
      });

  };

  ngOnDestroy(): void {
    this.subscriptions?.unsubscribe()
  };

}
