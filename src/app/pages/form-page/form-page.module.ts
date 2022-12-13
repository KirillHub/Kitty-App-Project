import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { RatingModule } from "ngx-bootstrap/rating";
import { FormSearchComponent } from "src/app/components/form/form-search/form-search.component";
import { FormComponent } from "src/app/components/form/form.component";
import { FormPageComponent } from "./components/form-page.component";
import { FormRoutingModule } from "./form-page-routing.module";
import { formReducer } from "./state/form-page.reducer";
import { FORM_STATE_NAME } from "./state/form-page.selector";

@NgModule({
	imports: [
		CommonModule,
		FormRoutingModule,
		ReactiveFormsModule,
		RatingModule.forRoot(),
		StoreModule.forFeature(FORM_STATE_NAME, formReducer)
	],
	declarations: [
		FormPageComponent,
		FormComponent,

		FormSearchComponent,
	]
})

export class FormPageModule { }
