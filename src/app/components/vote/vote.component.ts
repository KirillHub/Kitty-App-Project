import { TCatImage } from '../../models/cats';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { CatsService } from '../services/cats.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})

export class VoteComponent {
  @Input() catImage!: TCatImage; //get an array of one object with a picture of a cat
  @Output() outEnterName = new EventEmitter<boolean>()

  catsRandomImageId = '';
  buttonLoveIt = 'love it';
  buttonNopeIt = 'nope it';
  buttonEventHandle = true;

  constructor(private catsService: CatsService) { }

  buttonVoteEvent(event: MouseEvent) {
    const target = event.currentTarget as HTMLButtonElement;
    target ? this.catsRandomImageId = target.value : target;

    this.catsRandomImageId = target.value;

    switch (target.textContent) {
      case this.buttonLoveIt.toUpperCase():
        this.catsService.voteUp(this.catsRandomImageId).subscribe();
        break;
      case this.buttonNopeIt.toUpperCase():
        this.catsService.voteDown(this.catsRandomImageId).subscribe();
        break;
    }
  };

  nextCatImage() {
    return this.outEnterName.emit(this.buttonEventHandle)
  };

}

