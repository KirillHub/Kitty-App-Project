import { Component, OnInit } from '@angular/core';
import { CatsService } from 'src/app/services/cats.service';
import { TCat } from 'src/app/models/cats';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { setLoadingSpinner } from 'src/app/store/Shared/shared.actions';

@Component({
  selector: 'app-breeds-page',
  templateUrl: './breeds-page.component.html',
  styleUrls: ['./breeds-page.component.scss']
})

export class BreedsPageComponent implements OnInit {
  loading = false;
  catBreedsAllData: TCat[] = [];

  constructor(
    private catsService: CatsService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    // this.store.dispatch(setLoadingSpinner({ status: true }))

    this.catsService.getCatBreeds()
      .subscribe(catBreeds => this.catBreedsAllData = catBreeds)
  };

}
