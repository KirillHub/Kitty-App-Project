import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { TCat } from 'src/app/models/cats';
import { userEnteredCatBreedSelector } from 'src/app/pages/form-page/state/form-page.selector';
import { CatBreedsService } from 'src/app/services/cat-breeds.service';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})

export class FormSearchComponent implements OnInit, OnDestroy {
  catBreeds: TCat[] = [];
  catBreed: TCat[] = [];
  catSelectedBreed$?: Observable<string>;
  subscriptions: Subscription[] = [];
  constructor(
    private store: Store<AppState>,
    private catBreedsService: CatBreedsService
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.catBreedsService.entities$.subscribe(breeds =>
        this.catBreeds = breeds
      )
    );

    this.catSelectedBreed$ = this.store.select(userEnteredCatBreedSelector)

    this.subscriptions.push(
      this.catSelectedBreed$.subscribe(carBreed => {
        let breed = Object.values(carBreed)[0]?.trim()
        if (breed !== '' && breed !== undefined) {
          this.catBreed = this.catBreeds.filter(catBreed => catBreed.name === breed)
        }
      })
    );
  };

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  };

}

