import {Component} from 'angular2/core';
import {Router}              from 'angular2/router';

@Component({
    template: `<h1>Gallery</h1>`
})
export class Gallery { 
    constructor(
    private _router:Router){}
    
}