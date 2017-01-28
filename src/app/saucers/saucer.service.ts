import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment'
@Injectable()
export class SaucerService {

    apiUrl = environment.API_URL+ 'restaurants/';
    apiSaucer = environment.API_URL+'saucers/';
    
    constructor(private http: Http) { }

    getSaucers(idRestaurant: String) {
        return this.http.get(this.apiUrl + idRestaurant + "/saucers").map((response: Response) => response.json()).toPromise();
    }

    getSaucer(idSaucer:String){
        return this.http.get(this.apiSaucer + idSaucer).map((response: Response) => response.json()).toPromise();
    }

    //comentarios
}