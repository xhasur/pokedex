import { Component, OnInit, Input} from '@angular/core';
import {SlideMenuModule,MenuItem} from 'primeng/primeng';
import { Router, ActivatedRoute ,Params  } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';

import { PokemonService} from '../../services/pokemons.services';


//devolvere parametros como observables

@Component({
    selector :'pokemons-details-component',
    templateUrl: 'pokemons-details.component.html',
     styleUrls: ['pokemons-details.component.css']
})
export class PokemonDetailsComponent implements OnInit{
    
    id:number;
    pokemon:any={};
    tab:Number = 1;
    errorMessage:string;

    constructor(private route: ActivatedRoute,private router:Router,private pokemonService:PokemonService){}
   
    ngOnInit() {  
        let id = +this.route.snapshot.params['id'];
        //this.pokemon = this.service.getPokemonMock(id);
        this.pokemonService.getPokemon(id)
            .then(
            pokemon => this.pokemon = pokemon,
            error => this.errorMessage = <any>error
            )
    }
     selectTab = tab => this.tab = tab

  getPokemons():void {
         this.router.navigate(['']);
  }


}