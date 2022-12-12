import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CatBreedsService } from 'src/app/services/cat-breeds.service';
import { TCat, TCatImage } from 'src/app/models/cats';

@Component({
	selector: 'app-breeds',
	templateUrl: './breeds.component.html',
	styleUrls: ['./breeds.component.scss']
})
export class BreedsComponent implements OnInit, OnDestroy {

	catBreeds$?: Observable<TCat[]>;
	subscriptions?: Subscription[] = [];
	getCatImageByBreed$?: Observable<TCatImage[]>;
	catBreedImage?: TCatImage[];
	catBreed: TCat[] = [];
	catBreeds: TCat[] = [];

	constructor(private catBreedsService: CatBreedsService) { }

	getCatBreedImagesById(event: Event) {
		let selectedCatBreedId = (event.target as HTMLSelectElement).value;

		this.catBreeds.filter(catImageById => {
			if (catImageById.id === selectedCatBreedId) {
				this.catBreedImage = [catImageById.image]
			}
		});

		if (this.catBreed.length !== 0) this.catBreed = [];

		this.catBreeds?.filter(selectedCatBreed =>
			selectedCatBreed.id === selectedCatBreedId ?
				this.catBreed.push(selectedCatBreed) : false
		);

	};

	ngOnInit(): void {
		this.catBreeds$ = this.catBreedsService.entities$;

		this.subscriptions?.push(
			this.catBreeds$.subscribe(
				initialCatBreed => {
					this.catBreed = [initialCatBreed[0]]
					this.catBreedImage = [initialCatBreed[0].image]
					this.catBreeds = initialCatBreed
				}
			)
		)
	};

	ngOnDestroy(): void {
		this.subscriptions?.forEach(s => s.unsubscribe())
	};

}
