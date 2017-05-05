import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import {InitComponent} from './init.component'
import {PageNotFoundComponent} from './pageNotFound/pageNotFound.component'
import {HomeComponent} from './home/home.component'

import { RouterModule, Routes } from '@angular/router';
import { APPROUTER } from './commons/router';



@NgModule({
  declarations: [
    InitComponent,
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APPROUTER),
  ],
  providers: [],
  bootstrap: [InitComponent]
})
export class AppModule { }
