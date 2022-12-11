import { Component, OnInit, Input } from '@angular/core';
import { TCat, TCatImage } from 'src/app/models/cats';
import { CatsService } from '../../services/cats.service';

@Component({
	selector: 'app-breeds',
	templateUrl: './breeds.component.html',
	styleUrls: ['./breeds.component.scss']
})
export class BreedsComponent implements OnInit {

	@Input() catBreeds?: TCat[] = [];
	@Input() catBreedImages: TCatImage[] = [];
	@Input() catBreed: TCat[] = [];

	constructor(private catsService: CatsService) { }

	getCatBreedImagesById(event: Event) {  //! получаем ссылки на картинки
		let selectedCatBreedId = (event.target as HTMLSelectElement).value;

		this.catsService.getCatBreedImages(selectedCatBreedId, 5).subscribe(
			catBreed => this.catBreedImages = catBreed
		)

		if (this.catBreed.length !== 0) this.catBreed = [];

		this.catBreeds?.filter(selectedCatBreed =>
			selectedCatBreed.id === selectedCatBreedId ? this.catBreed.push(selectedCatBreed) : false
		)
	};

	ngOnInit(): void {
		this.catsService.getCatBreedImages('abys', 5).subscribe(
			catBreed => {
				this.catBreedImages = catBreed;
				this.catBreed = this.catBreedImages[0].breeds;
			}
		)
	};

}
