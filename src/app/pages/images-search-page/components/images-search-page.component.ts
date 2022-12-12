import { Component, OnInit } from '@angular/core';
import { CatsService } from 'src/app/services/cats.service';
import { TCatsCategories } from 'src/app/models/catsCategories';

@Component({
  selector: 'app-images-search-page',
  templateUrl: './images-search-page.component.html',
  styleUrls: ['./images-search-page.component.scss']
})
export class ImagesSearchPageComponent implements OnInit {
  catsCategories: TCatsCategories[] = [];

  constructor(private catsService: CatsService) { }

  ngOnInit(): void {

    this.catsService.getCatsCategories().subscribe(
      catsCategory => this.catsCategories = catsCategory
    );


  };

}
