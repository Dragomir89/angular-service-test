import { Component, OnInit } from "@angular/core";
import { HomeServise } from './home.service';

@Component({
    selector: 'app-home',
    providers: [HomeServise],
    template: `<div><h1>{{data.login}}</h1></div>`
})


export class Home implements OnInit {
    
    public data = {}

    constructor(private homeService: HomeServise) { }
    
    // ngOnInit() {
    //     this.data = this.homeService.getData().subscribe((data)=>{
    //         console.log(JSON.parse(data._body));
    //         this.data = JSON.parse(data._body);
    //     })
    // }

    ngOnInit() {
        this.data = this.homeService.getData().subscribe((data)=>{
            console.log(data);
            this.data = data;
        })
    }

}