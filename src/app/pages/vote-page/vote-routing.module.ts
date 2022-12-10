
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VotePageComponent } from "./components/vote-page.component";


const routes: Routes = [
	{
		path: 'vote',
		component: VotePageComponent
	}
];


@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class VoteRoutingModule { }

