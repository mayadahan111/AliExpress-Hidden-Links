import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgOptimizedImage} from "@angular/common";
import {ItemsService} from "../services/items.service";
import {ListComponent} from "./components/list/list.component";
import { ItemPageComponent } from "./components/item-page/item-page.component";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
  ],
  providers: [
    ItemsService
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [

  ]
})
export class AppModule { }
