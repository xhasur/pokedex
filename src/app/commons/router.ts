import { Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { PageNotFoundComponent } from '../pageNotFound/pageNotFound.component';
import { PokemonDetailsComponent } from '../pokemon/details/pokemons-details.component';

export const APPROUTER:Routes= [
    {path:'', component: AppComponent},
    { path: 'pokemon-details/:pokemonName', component: PokemonDetailsComponent }
    //{path:'**', component: PageNotFoundComponent}
]