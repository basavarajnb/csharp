import {Component} from 'angular2/core';
import {Router}              from 'angular2/router';

@Component({
    template: `<h1>About US</h1>`
})
export class About { 
    constructor(
    private _router:Router){}
    
}
