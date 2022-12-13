import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TCat } from 'src/app/models/cats';
import { selectCatInfoByBreed } from 'src/app/pages/breeds-page/state/breeds-page.selectors';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-breeds-info',
  templateUrl: './breeds-info.component.html',
  styleUrls: ['./breeds-info.component.scss']
})

export class BreedsInfoComponent implements OnInit {

  catBreed$?: Observable<TCat[]>

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.catBreed$ = this.store.select(selectCatInfoByBreed)
  }
}
