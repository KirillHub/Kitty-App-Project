import { Subject } from 'rxjs';
import { Observable, Subscription } from 'rxjs';
import { TCat, TCatImage } from '../../../models/cats';
import { Component, OnInit } from '@angular/core';
import { CatsService } from 'src/app/components/services/cats.service';
import { tap } from 'rxjs';
import TUserSettingsParam from 'src/app/models/userSettingsParam';
import { TCatsCategories } from 'src/app/models/catsCategories';

@Component({
	selector: 'app-images-search-page',
	templateUrl: './images-search-page.component.html',
	styleUrls: ['./images-search-page.component.scss']
})
export class ImagesSearchPageComponent implements OnInit {

	loading = false;
	catsImagesByDefaultSettings: TCatImage[] = [];
	catsCategories: TCatsCategories[] = [];
	catsBreedsNameList: TCat[] = [];

	catsService$?: Observable<TCat[]>;
	subscriptions: Subscription[] = [];

	defaultUserSettingsParam: TUserSettingsParam = {
		limit: 1,             // default 6
		has_breeds: 0,        // if 0, does not load array breeds for currentBreed, 1 -> load
		mime_types: "png",    // later randomize this extensions "png, jpg, gif"
		category_ids: -1,     // to cancel the condition, I assign this value.
		breeds_ids: -1        //to cancel the condition, I assign this value.
	};

	constructor(private catsService: CatsService) { }

	ngOnInit(): void {
		this.loading = true;

		this.catsService$ = this.catsService.getCatBreeds()
		console.log(this.catsService$.subscribe(a => console.log(a)));

		this.catsService.getCatsImagesByUserSettings(this.defaultUserSettingsParam).pipe(
			tap(() => this.loading = false)
		)
			.subscribe(catImages => {
				this.catsImagesByDefaultSettings = catImages
			});

		this.catsService.getCatBreeds().subscribe(
			catsBreeds => this.catsBreedsNameList = catsBreeds
		);

		this.catsService.getCatsCategories().subscribe(
			catsCategory => this.catsCategories = catsCategory
		);

	};

}
