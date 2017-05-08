import { Component, OnInit, Input} from '@angular/core';
import {SlideMenuModule,MenuItem} from 'primeng/primeng';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
    selector :'pokemons-details-component',
    templateUrl: 'pokemons-details.component.html'
})
export class PokemonDetailsComponent implements OnInit{
    
    id:number;
    pokemon:any;

    constructor(private route: ActivatedRoute){}
   
    ngOnInit() {  
         this.pokemon = this.route.params.subscribe(params => {this.id = +params['idPokemon']; });
         debugger;
    }



}