import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {fadeAnimation} from './animation/animation';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    animations: [fadeAnimation]
})
export class AppComponent {

    url: string;

    constructor(location: Location, router: Router) {
        router.events.subscribe(() => {
            if(location.path() !== ''){
                this.url = location.path();
            } else {
                this.url = 'Home';
            }
        });
    }
}
