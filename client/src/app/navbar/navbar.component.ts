import { Component } from '@angular/core';
import { elementService } from '../service/elements.service';
import { DomSanitizer } from '@angular/platform-browser';

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
  menu: Array<any> = [];

  constructor(
    private servicio: elementService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    console.log('FDsaf');
    this.servicio.getMenu().subscribe((res) => {
      console.log('wenas');
      res.response.forEach((element: any, index: number) => {
        this.menu.push({
          icon: this.sanitizer.bypassSecurityTrustHtml(element.icon),
          name: element.name,
        });
      });
      console.log(this.menu);
    });
  }
}
