import { Component, OnInit } from '@angular/core';
import { tap, map } from 'rxjs';
import { CatsService } from 'src/app/components/services/cats.service';
import { TCat } from 'src/app/models/cats';

@Component({
  selector: 'app-breeds-page',
  templateUrl: './breeds-page.component.html',
  styleUrls: ['./breeds-page.component.scss']
})

export class BreedsPageComponent implements OnInit {
  loading = false;
  catBreedsAllData: TCat[] = [];

  constructor(private catsService: CatsService) { }

  ngOnInit(): void {
    this.loading = true;

    this.catsService.getCatBreeds().pipe(
      tap(() => this.loading = false)
    )
      .subscribe(catBreeds => this.catBreedsAllData = catBreeds)
  };

}
