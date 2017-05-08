import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {InitComponent} from './init.component'
import {PageNotFoundComponent} from './pageNotFound/pageNotFound.component'
import {PokemonListComponent} from './pokemon/list/pokemon-list.component'
import {PokemonComponent} from './pokemon/pokemon.component'
import {PokemonDetailsComponent} from './pokemon/details/pokemons-details.component'

import {PokemonService} from './services/pokemons.services'

import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { ImageifyPipe } from './pipes/imageify.pipe';

import { RouterModule, Routes } from '@angular/router';
import { APPROUTER } from './commons/router';

@NgModule({
  declarations: [
    InitComponent,
    AppComponent,
    PageNotFoundComponent,
    PokemonListComponent,
    PokemonComponent,
    PokemonDetailsComponent,
    ImageifyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APPROUTER),
    MaterialModule.forRoot()
  ],
  providers: [PokemonService],
  bootstrap: [InitComponent]
})
export class AppModule { }
