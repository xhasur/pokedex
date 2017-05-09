import { Component, OnInit } from '@angular/core';
import {SlideMenuModule,MenuItem} from 'primeng/primeng';
import { PokemonService} from '../../services/pokemons.services';

@Component({
    selector :'pokemon-list-component',
    templateUrl: 'pokemon-list.component.html',
    styleUrls: ['pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit{
    

constructor(private pokemonService : PokemonService){

}

  title:string;
  pokemons: any;
  errorMessage:string;

    ngOnInit() {
       this.title = 'List Of Pokemons';     
       /*this.pokemons = this.pokemonService.getPokemonsMock();   */  
       this.pokemonService.getPokemons()
        .then(
          pokemons => this.pokemons = pokemons,
          error => this.errorMessage = <any>error
        );
      
    }


 
}