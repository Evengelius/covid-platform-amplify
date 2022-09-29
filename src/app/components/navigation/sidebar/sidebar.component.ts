import { Component, Input, OnInit } from '@angular/core';
import { Link } from '../../../models/link';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    links: Link[];
    className: string;

    constructor() {
        this.links = [
            new Link('dashboard', 'fs-4 bi-speedometer2'),
            new Link('products', 'fs-4 bi-table'),
            new Link('manufacturing', 'fs-4 bi-bar-chart'),
            new Link('contracts', 'fs-4 bi-people'),
        ];
    }

  ngOnInit(): void {
  }
}
