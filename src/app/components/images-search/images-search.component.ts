import { fromEvent, Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { TCat, TCatImage } from './../../models/cats';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import TUserSettingsParam from 'src/app/models/userSettingsParam';
import { CatsService } from '../services/cats.service';
import { TCatsCategories } from 'src/app/models/catsCategories';

@Component({
  selector: 'app-images-search',
  templateUrl: './images-search.component.html',
  styleUrls: ['./images-search.component.scss']
})

export class ImagesSearchComponent implements OnInit, OnDestroy {

  @Input() getDefaultCatsImages: TCatImage[] = [];
  @Input() getCatsCategories: TCatsCategories[] = [];
  @Input() getCatsBreedsNameList: TCat[] = [];
  @Input() getDefaultUserSettingsParam!: TUserSettingsParam;

  currentUserSettings!: TUserSettingsParam;
  uploadedСurrentСatImages!: TCatImage[];

  constructor(private catsService: CatsService) { }

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
    }

    this.getNewImagesByUserSettings(this.currentUserSettings);

    fromEvent(userSettingEvent, 'click').pipe(
      takeUntil(this.cats$)
    ).subscribe(a => console.log(a));
  };

  loadMoreImages(event: Event) {
    if (event) {
      this.getNewImagesByUserSettings(this.currentUserSettings);
    }
  }

  getNewImagesByUserSettings(currentUserSettings: TUserSettingsParam) {

    this.catsService.getCatsImagesByUserSettings(currentUserSettings).subscribe(
      catsImages => this.getDefaultCatsImages = catsImages
    )

  };

  ngOnInit(): void {
    this.currentUserSettings = this.getDefaultUserSettingsParam;
  };

  ngOnDestroy(): void {
    // this.cats$.
  }

}


