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
      console.log(res);
      this.menu = res.response;
    });
  }
}
