import { Component, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { loadImage } from 'src/app/pages/vote-page/state/vote-page.actions';
import { CatsService } from 'src/app/services/cats.service';
import { AppState } from 'src/app/store/app.state';
import { setLoadingSpinner } from 'src/app/store/Shared/shared.actions';

@Component({
  selector: 'app-vote-buttons',
  templateUrl: './vote-buttons.component.html',
  styleUrls: ['./vote-buttons.component.scss']
})

export class VoteButtonsComponent implements OnDestroy {
  @Input() catImageId?: string;

  catsRandomImageId = '';
  buttonLoveIt = 'love it';
  buttonNopeIt = 'nope it';
  subscriptions?: Subscription[] = [];

  constructor(
    private store: Store<AppState>,
    private catsService: CatsService,
  ) { }

  buttonVoteEvent(event: MouseEvent) {
    const target = event.currentTarget as HTMLButtonElement;
    target ? this.catsRandomImageId = target.value : target;

    this.catsRandomImageId = target.value;

    switch (target.textContent) {
      case this.buttonLoveIt.toUpperCase().trim():
        this.subscriptions?.push(
          this.catsService.voteUp(this.catsRandomImageId).subscribe()
        );
        break;

      case this.buttonNopeIt.toUpperCase().trim():
        this.subscriptions?.push(
          this.catsService.voteDown(this.catsRandomImageId).subscribe()
        );
        break;
    };

    this.store.dispatch(loadImage());
    this.store.dispatch(setLoadingSpinner({ status: true }));
  };

  ngOnDestroy(): void {
    this.subscriptions?.forEach(s => s.unsubscribe())
  };

}
