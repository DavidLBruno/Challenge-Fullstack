import { Component } from '@angular/core';
import { elementService } from '../service/elements.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  menu = [];

  constructor(private servicio: elementService) {}

  ngOnInit() {
    this.servicio.getMenu().subscribe((res) => {
      console.log(res);
      this.menu = res;
    });
  }
}
