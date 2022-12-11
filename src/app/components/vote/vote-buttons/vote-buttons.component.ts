import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadImage } from 'src/app/pages/vote-page/state/vote-page.actions';
import { CatsService } from 'src/app/services/cats.service';
import { AppState } from 'src/app/store/app.state';
import { setLoadingSpinner } from 'src/app/store/Shared/shared.actions';

@Component({
  selector: 'app-vote-buttons',
  templateUrl: './vote-buttons.component.html',
  styleUrls: ['./vote-buttons.component.scss']
})

export class VoteButtonsComponent {

  @Input() catImageId?: string;

  catsRandomImageId = '';
  buttonLoveIt = 'love it';
  buttonNopeIt = 'nope it';

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

        console.log('we here voteUp');
        this.catsService.voteUp(this.catsRandomImageId).subscribe();
        break;
      case this.buttonNopeIt.toUpperCase().trim():
        console.log('we here voteDown');
        this.catsService.voteDown(this.catsRandomImageId).subscribe();
        break;
    };

    this.store.dispatch(loadImage());
    this.store.dispatch(setLoadingSpinner({ status: true }));
  };

  nextCatImage() {
    this.store.dispatch(loadImage());
  };


}
