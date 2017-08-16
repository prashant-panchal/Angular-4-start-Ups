import { Component, OnInit } from '@angular/core';
import { ROUTES } from './header-routes.config';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public menuItems: any[];
  constructor() { }
   ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
