import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environmentApi } from '../environments/environment.api';

@Injectable()
export class loginService {
  constructor(private http: HttpClient) {}

  login(event: Object): Observable<any> {
    return this.http.post<any>(environmentApi.urlApi + 'login', event);
  }
}
