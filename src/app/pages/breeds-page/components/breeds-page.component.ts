import { Component, OnInit } from '@angular/core';
import { CatsService } from 'src/app/services/cats.service';
import { TCat } from 'src/app/models/cats';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { setLoadingSpinner } from 'src/app/store/Shared/shared.actions';
import { Observable } from 'rxjs';
import { CatBreedsService } from 'src/app/services/cat-breeds.service';

@Component({
	selector: 'app-breeds-page',
	templateUrl: './breeds-page.component.html',
	styleUrls: ['./breeds-page.component.scss']
})

export class BreedsPageComponent implements OnInit {


	constructor(
		private catsService: CatsService,
		private catBreedsService: CatBreedsService,

	) { }

	ngOnInit(): void {
		// this.store.dispatch(setLoadingSpinner({ status: true }))

		// this.cat123$ = this.catBreedsService.entities$ //! проверил, вызов кэшируется!!
	};


}
