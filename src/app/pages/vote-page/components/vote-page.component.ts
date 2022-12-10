
import { TCatImage } from '../../../models/cats';
import { Component, OnInit } from '@angular/core';
import { CatsService } from 'src/app/components/services/cats.service';
import { tap, Observable, map, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { TAppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-vote-page',
  templateUrl: './vote-page.component.html',
  styleUrls: ['./vote-page.component.scss']
})
export class VotePageComponent implements OnInit {

  catImage$?: Observable<TCatImage[]>;

  constructor(private catsService: CatsService,
    private store: Store<TAppState>) { }

  loading = false;
  term = '';

  nextCatImage(buttonEventActive: boolean) {
    this.loading = true;
    if (buttonEventActive) {
      this.catImage$ = this.catsService.getCatRandomImagesForVote().pipe(
        tap(() => this.loading = false)
      )
    };
  }

  ngOnInit(): void {
    this.loading = true;
    this.catImage$ = this.catsService.getCatRandomImagesForVote().pipe(
      tap(() => this.loading = false)
    )
    // this.store.dispatch({ type: '[Cat Random Image] Load Cat Image' }) //! работающая версия подгрузки
  };

}
