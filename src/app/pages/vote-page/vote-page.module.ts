import { VotePageComponent } from './components/vote-page.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VoteComponent } from 'src/app/components/vote/vote.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { StoreModule } from '@ngrx/store';
import { VOTE_STATE_NAME } from './state/vote-page.selectors';
import { voteReducer } from './state/vote-page.reducer';
import { EffectsModule } from '@ngrx/effects';
import { VoteEffects } from './state/vote-page.effects';
import { RouterModule, Routes } from '@angular/router';
import { VoteButtonsComponent } from 'src/app/components/vote/vote-buttons/vote-buttons.component';

const routes: Routes = [
	{
		path: '',
		component: VotePageComponent
	}
];

@NgModule({
  imports: [
    CommonModule,
    AngularSvgIconModule.forRoot(),
    // VoteRoutingModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(VOTE_STATE_NAME, voteReducer),
    EffectsModule.forFeature([VoteEffects])
  ],
  declarations: [
    VotePageComponent,
    VoteComponent,
    VoteButtonsComponent
  ],
  exports: [RouterModule]
})

export class VotePageModule { }
