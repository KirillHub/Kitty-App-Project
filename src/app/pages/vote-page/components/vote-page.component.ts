
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CatBreedsService } from 'src/app/services/cat-breeds.service';
import { TCat } from 'src/app/models/cats';
import { AppState } from 'src/app/store/app.state';
import { setLoadingSpinner } from 'src/app/store/Shared/shared.actions';

@Component({
	selector: 'app-vote-page',
	templateUrl: './vote-page.component.html',
	styleUrls: ['./vote-page.component.scss']
})
export class VotePageComponent implements OnInit {
	loading = false;
	term = '';

	cat$?: Observable<TCat[]>;

	constructor() { }


	ngOnInit(): void {
		// this.cat$ = this.catBreedsService.getAll() //! работает!!
	};

}
