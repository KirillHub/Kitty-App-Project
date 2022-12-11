import { TCatImage } from '../../models/cats';
import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { CatsService } from '../../services/cats.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCatImage } from 'src/app/pages/vote-page/state/vote-page.selectors';
import { loadImage } from 'src/app/pages/vote-page/state/vote-page.actions';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})

export class VoteComponent implements OnInit {
  catImage$?: Observable<TCatImage[]>;

  @Output() outEnterName = new EventEmitter<boolean>()

  catsRandomImageId = '';
  buttonLoveIt = 'love it';
  buttonNopeIt = 'nope it';
  buttonEventHandle = true;
  loading = false;

  spinner$ = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.catImage$ = this.store.select(selectCatImage);
    this.store.dispatch(loadImage());
  };

}
