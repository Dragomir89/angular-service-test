import { Injectable } from "@angular/core";
// import { Http } from '@angular/http';
import { HttpClient } from "@angular/common/http";


@Injectable()
export class HomeServise {
    
    private url = 'https://api.github.com/users/Dragomir89';

    // constructor (private http: Http) {}
    constructor (private http: HttpClient) {}

    // getData() {
    //     return this.http.get(this.url);
    // }
    getData() {
        return this.http.get(this.url);
    }
}
