import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import TUserSettingsParam from 'src/app/models/userSettingsParam';
import {
  actualUserSettingForSearchImages,
  loadCatImagesAction
} from 'src/app/pages/images-search-page/state/images-search-page.actions';
import { selectUserSearchSettings } from 'src/app/pages/images-search-page/state/images-search-page.selectors';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-images-search-footer',
  templateUrl: './images-search-footer.component.html',
  styleUrls: ['./images-search-footer.component.scss']
})

export class ImagesSearchFooterComponent implements OnInit, OnDestroy {

  currentUserSettings!: TUserSettingsParam;
  subscription?: Subscription;

  constructor(private store: Store<AppState>) { }

  userEventsListener(event: Event) {
    let userSettingEvent = (event.target as HTMLSelectElement);

    if (userSettingEvent && userSettingEvent.id === 'limit') {
      this.currentUserSettings.limit = +userSettingEvent.value
    }

    this.store.dispatch(actualUserSettingForSearchImages({ userSettings: this.currentUserSettings }));
    this.store.dispatch(loadCatImagesAction());
  };

  loadMoreImages(event: Event) {
    if (event) this.store.dispatch(loadCatImagesAction())
  };

  ngOnInit(): void {
    this.subscription = this.store.select(selectUserSearchSettings).subscribe(
      defaulfSettings => {
        this.currentUserSettings = { ...defaulfSettings }
      }
    );
  };

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe()
  };
}
