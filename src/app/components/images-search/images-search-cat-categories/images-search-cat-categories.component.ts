import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { TCat } from 'src/app/models/cats';
import { TCatsCategories } from 'src/app/models/catsCategories';
import TUserSettingsParam from 'src/app/models/userSettingsParam';
import {
  actualUserSettingForSearchImages,
  loadCategories,
  loadCatImagesAction
} from 'src/app/pages/images-search-page/state/images-search-page.actions';
import {
  selectCatCategories,
  selectUserSearchSettings
} from 'src/app/pages/images-search-page/state/images-search-page.selectors';
import { CatBreedsService } from 'src/app/services/cat-breeds.service';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-images-search-cat-categories',
  templateUrl: './images-search-cat-categories.component.html',
  styleUrls: ['./images-search-cat-categories.component.scss']
})

export class ImagesSearchCatCategoriesComponent implements OnInit, OnDestroy {
  getCatsBreeds$?: Observable<TCat[]>
  getCatsCategories$?: Observable<TCatsCategories[]>
  currentUserSettings!: TUserSettingsParam;
  subscription?: Subscription;

  constructor(
    private store: Store<AppState>,
    private catBreedsService: CatBreedsService
  ) { }

  userEventsListener(event: Event) {
    let userSettingEvent = (event.target as HTMLSelectElement)

    switch (userSettingEvent.id) {
      case 'type':
        this.currentUserSettings.mime_types = userSettingEvent.value;
        break;
      case 'category':
        this.currentUserSettings.category_ids = +userSettingEvent.value
        break;
      case 'breeds':
        this.currentUserSettings.breeds_ids = userSettingEvent.value;
        break;
    };

    this.store.dispatch(actualUserSettingForSearchImages({
      userSettings: this.currentUserSettings
    }));
    this.store.dispatch(loadCatImagesAction());
  }

  ngOnInit(): void {
    this.getCatsBreeds$ = this.catBreedsService.entities$;

    this.store.dispatch(loadCategories());
    this.getCatsCategories$ = this.store.select(selectCatCategories);

    this.subscription = this.store.select(selectUserSearchSettings).subscribe(
      defaulfSettings => {
        this.currentUserSettings = { ...defaulfSettings }
      }
    );
  };

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe()
  }
}
