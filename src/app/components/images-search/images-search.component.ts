import { fromEvent, Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { TCat, TCatImage } from './../../models/cats';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import TUserSettingsParam from 'src/app/models/userSettingsParam';
import { CatsService } from '../../services/cats.service';
import { TCatsCategories } from 'src/app/models/catsCategories';
import { CatBreedsService } from 'src/app/services/cat-breeds.service';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { selectDefaulfSearchSettings } from 'src/app/pages/images-search-page/state/images-search-page.selectors';

@Component({
  selector: 'app-images-search',
  templateUrl: './images-search.component.html',
  styleUrls: ['./images-search.component.scss']
})

export class ImagesSearchComponent implements OnInit, OnDestroy {

  getDefaultCatsImages: TCatImage[] = [];
  @Input() getCatsCategories: TCatsCategories[] = [];
  getCatsBreeds$?: Observable<TCat[]>;
  defaultUserSettingsParam!: TUserSettingsParam;

  currentUserSettings!: TUserSettingsParam;
  uploadedСurrentСatImages!: TCatImage[];

  constructor(
    private catsService: CatsService,
    private catBreedsService: CatBreedsService,
    private store: Store<AppState>
  ) { }

  cats$ = new Subject();
  subscriptions: Subscription[] = [];



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
      case 'limit':
        this.currentUserSettings.limit = +userSettingEvent.value
        break;
    };

    this.getNewImagesByUserSettings(this.currentUserSettings);
  };

  loadMoreImages(event: Event) { //! later
    if (event) {
      this.getNewImagesByUserSettings(this.currentUserSettings);
    }
  };
  getNewImagesByUserSettings(currentUserSettings: TUserSettingsParam) { //! later
    this.catsService.getCatsImagesByUserSettings(currentUserSettings).subscribe(
      catsImages => this.getDefaultCatsImages = catsImages
    )
  };


  ngOnInit(): void {

    this.store.select(selectDefaulfSearchSettings).subscribe(
      defaultSettings => this.defaultUserSettingsParam = defaultSettings
    );

    this.getCatsBreeds$ = this.catBreedsService.entities$

    this.currentUserSettings = this.defaultUserSettingsParam;



    this.catsService.getCatsImagesByUserSettings(this.defaultUserSettingsParam)
      .subscribe(catImages => {
        this.getDefaultCatsImages = catImages
      });

  };

  ngOnDestroy(): void { }

}


