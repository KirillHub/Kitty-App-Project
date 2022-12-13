import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TCatImage } from 'src/app/models/cats';
import { loadCatImagesAction } from 'src/app/pages/images-search-page/state/images-search-page.actions';
import { loadingCatImagesSelector } from 'src/app/pages/images-search-page/state/images-search-page.selectors';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-images-search-cat-images',
  templateUrl: './images-search-cat-images.component.html',
  styleUrls: ['./images-search-cat-images.component.scss']
})

export class ImagesSearchCatImagesComponent implements OnInit {
  getCatsImagesByUserSettings$?: Observable<TCatImage[]>

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadCatImagesAction())
    this.getCatsImagesByUserSettings$ = this.store.select(loadingCatImagesSelector)
  }
}
