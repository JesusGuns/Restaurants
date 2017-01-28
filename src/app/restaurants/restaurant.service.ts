import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment'
//Decorador
@Injectable() //Prepara la clase para poder inyectar dependencias
export class RestaurantService {
    restaurants = [];
    apiUrl = environment.API_URL+ 'restaurants';
    constructor(private http: Http) { }
    getRestaurants() {
        return this.http.get(this.apiUrl).map((response: Response) => response.json()).toPromise();
    }

    getRestaurant(id: String) {
        return this.http.get(this.apiUrl + "/"+id).map((response: Response) => response.json()).toPromise();
    }
}

