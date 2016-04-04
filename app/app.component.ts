import {Component}   from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {About}   from './about';
import {Gallery}     from './gallery';

@Component({
    selector: 'my-app',
    template: `<h1>Component Router</h1>
  <nav>
    <a [routerLink]="['About']">About</a>
    <a [routerLink]="['Gallery']">Gallery</a>
  </nav>
  <router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path:'/about', name: 'About', component: About},
  {path:'/gallery',        name: 'Gallery',       component: Gallery}
])
export class AppComponent { }
