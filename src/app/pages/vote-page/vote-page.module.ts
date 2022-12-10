import { VotePageComponent } from './components/vote-page.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VoteComponent } from 'src/app/components/vote/vote.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { VoteRoutingModule } from './vote-routing.module';


@NgModule({
	imports: [
		CommonModule,
		AngularSvgIconModule.forRoot(),
		VoteRoutingModule
		// RouterModule.forChild(routes)
	],
	declarations: [
		VotePageComponent,
		VoteComponent
	],

})

export class VotePageModule {}
