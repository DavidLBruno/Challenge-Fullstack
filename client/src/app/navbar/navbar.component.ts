import { Component } from '@angular/core';
import { elementService } from '../service/elements.service';
interface Option {
  name: string;
  icon: string;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  menu: Array<Option> = [];

  constructor(private servicio: elementService) {}

  ngOnInit() {
    this.servicio.getMenu().subscribe((res) => {
      this.menu = res.response;
      res.forEach((element: any, index: number) => {
        $(`.image${index}`)[0].innerHTML = element.icon;
      });
    });
  }
}
