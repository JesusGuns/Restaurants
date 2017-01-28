import { Injectable } from '@angular/core';
import {Headers,Http,Response} from '@angular/http'
import 'rxjs/Rx'
import {environment} from '../../environments/environment'

@Injectable()
export class CommentService {

    apiUrl = environment.API_URL+'saucers/';
    constructor(private http: Http) { }

    getComment(idSaucer:String){
        return this.http.get(this.apiUrl+idSaucer+"/comments").map((response: Response) => response.json()).toPromise();
    }

    addComment(saucerId:String,data){
        data.date = new Date().toUTCString();
        //URL + BODY + HEADERS
        return this.http.post(this.apiUrl+saucerId+"/comments",data).map((response:Response)=>response.json() ).toPromise();
    }
}