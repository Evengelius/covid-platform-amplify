import {Component, Input, OnInit} from '@angular/core';

import {
    EclSiteHeaderLanguageClickEvent,
    EclSiteHeaderSearchEvent
} from '@eui/ecl-core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
    @Input() url: string;

    constructor() {
        console.log(`The url is :${this.url}`);
    }

    onSearch(evt: EclSiteHeaderSearchEvent) {
        console.log(evt);
    }

    ngOnInit(): void {
    }
}
