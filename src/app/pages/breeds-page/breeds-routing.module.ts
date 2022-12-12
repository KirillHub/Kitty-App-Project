import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BreedsPageComponent } from "./components/breeds-page.component";


const routes: Routes = [
  {
    path: '',
    component: BreedsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BreedsRoutingModule { }


