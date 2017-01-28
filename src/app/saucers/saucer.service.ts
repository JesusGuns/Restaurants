import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class SaucerService {

    apiUrl = 'https://stark-river-41252.herokuapp.com/api/restaurants/';
    apiSaucer = 'https://stark-river-41252.herokuapp.com/api/saucers/';
    constructor(private http: Http) { }

    getSaucers(idRestaurant: String) {
        return this.http.get(this.apiUrl + idRestaurant + "/saucers").map((response: Response) => response.json()).toPromise();
    }

    getSaucer(idSaucer:String){
        return this.http.get(this.apiSaucer + idSaucer).map((response: Response) => response.json()).toPromise();
    }
}