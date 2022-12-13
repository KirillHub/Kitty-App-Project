import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { setUserEnteredCatBreedAction } from 'src/app/pages/form-page/state/form-page.actions';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  userSearchForm!: FormGroup;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.userSearchForm = new FormGroup({
      catBreedName: new FormControl(null, [
        Validators.required,
      ])
    });

  };

  onSearchCatByBreedName() {
    this.store.dispatch(setUserEnteredCatBreedAction(
      { updateUserEnteredCatBreed: this.userSearchForm.value }
    ))
  };

}

