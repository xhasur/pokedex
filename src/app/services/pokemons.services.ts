import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { POKEMONS } from "./mocks/pokemons.service";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
 
@Injectable()
export class PokemonService {
    constructor(private http: Http) { }
 
    urlBackEnd = "https://pokeapi.co/api/v2/";
 
 
getPokemonsMock(){
        return POKEMONS;
    }

 getPokemonMock(id:number){
        let ticket = POKEMONS.find(x => x.id == id);
        return ticket;
    }
 
 
 getPokemons():Promise<any[]> {
        let url:string = this.urlBackEnd +'pokemon/?limit=150';
        return this.http.get(url)
             .toPromise()
             .then(this.extractData)
             .catch(this.handleError);
    }
 



 getPokemon(id:number): Promise<any> {
        let url:string = this.urlBackEnd +'pokemon/'+id+'/';
        return this.http.get(url)
             .toPromise()
             .then(this.extractData)
             .catch(this.handleError);
    }
 

   
    private extractData(res: Response) {
        let body = res.json();
        console.log("body", body);
        if (body != null){
            if(body.results == null){
                return body;
            }
            return body.results;
        }
        else{
            return { };
        }
    }


 private handleError(error: Response | any){
        let errMsg:string;
        if(error instanceof Response){
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else{
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}