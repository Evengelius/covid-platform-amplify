import {Component} from '@angular/core';
import {fadeAnimation} from './animation/animation';
import {
    EclAppLanguageDismissEvent, EclMenuItemSelectEvent,
    EclSiteHeaderLanguageClickEvent,
    EclSiteHeaderLoginEvent,
    EclSiteHeaderSearchEvent
} from "@eui/ecl-core";
import {Link} from "./models/link";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    animations: [fadeAnimation]
})
export class AppComponent {

    links: Link[];


    constructor() {
        this.links = [
            new Link('dashboard'),
            new Link('products'),
            new Link('manufacturers'),
            new Link('warehouses'),
            new Link('suppliers'),
            new Link('distributors'),
            new Link('reports'),
        ]
    }

    isLoggedIn = false;

    onLogin(evt: EclSiteHeaderLoginEvent) {
        this.isLoggedIn = true;
        console.log(evt);
    }

    onLogout(evt: MouseEvent) {
        this.isLoggedIn = false;
        evt.preventDefault();
        console.log('logout');
    }

    onSearch(evt: EclSiteHeaderSearchEvent) {
        console.log(evt);
    }

    onLanguageClick(evt: EclSiteHeaderLanguageClickEvent) {
        console.log(evt);
    }

    onLanguageDismiss(evt: EclAppLanguageDismissEvent) {
        console.log('language dismiss', evt);
    }

    onMenuItemSelected(evt: EclMenuItemSelectEvent) {
        console.log('menu item selected', evt);
    }
}
