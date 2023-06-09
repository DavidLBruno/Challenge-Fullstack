import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environmentApi } from '../environments/environment.api';

@Injectable()
export class elementService {
  constructor(private http: HttpClient) {}

  getMenu(): Observable<any> {
    return this.http.get<any>(environmentApi.urlApi + 'menu');
  }
}
