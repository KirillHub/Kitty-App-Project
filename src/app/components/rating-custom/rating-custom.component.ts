import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-custom',
  templateUrl: './rating-custom.component.html',
  styleUrls: ['./rating-custom.component.scss']
})
export class DemoRatingCustomComponent {
  @Input() rate!: number;
  @Input() theNatureOfCatBreed!: string;

  max = 5;
  isReadonly = true;
}
