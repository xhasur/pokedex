import { Component, OnInit, Input} from '@angular/core';
import {SlideMenuModule,MenuItem} from 'primeng/primeng';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
    selector :'pokemon-component',
    templateUrl: 'pokemon.component.html',
    styleUrls: ['pokemon.component.css']
})
export class PokemonComponent implements OnInit{
    
@Input() pokemon:any = {}
@Input() index:any = {}

constructor(private route: ActivatedRoute, private router: Router){}

    ngOnInit() {  
        console.log(JSON.stringify(this.pokemon));
        console.log(JSON.stringify(this.index));
    }


   getPokemon(idPokemon: number):void{
         this.router.navigate(['/pokemon-details', idPokemon]);
   }

}