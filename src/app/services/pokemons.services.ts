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
 
    urlBackEnd = "http://localhost:3000/";
 
 
getPokemonsMock(){
        return POKEMONS;
    }

 getPokemons() {
        return this.http.get(this.urlBackEnd +'getPokemons')
             .toPromise()
             .then(this.extractData)
             .catch(this.handleError);
    }
 
   
    private extractData(res: Response) {
        let body = res.json();
        console.log("body", body);
        if (body.status == 200){
            return body.result;
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