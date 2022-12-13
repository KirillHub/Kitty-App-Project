import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TCatImage } from 'src/app/models/cats';
import { loadImageByBreed } from 'src/app/pages/breeds-page/state/breeds-page.actions';
import { selectCatImageByBreed } from 'src/app/pages/breeds-page/state/breeds-page.selectors';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-breeds-image',
  templateUrl: './breeds-image.component.html',
  styleUrls: ['./breeds-image.component.scss']
})

export class BreedsImageComponent implements OnInit {

  catBreedImage$?: Observable<TCatImage[]>

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadImageByBreed())

    this.catBreedImage$ = this.store.select(selectCatImageByBreed)
  }
}
