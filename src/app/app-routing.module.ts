import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from "./components/list/list.component";
import { ItemPageComponent } from "./components/item-page/item-page.component";

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: ':id', component: ItemPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
