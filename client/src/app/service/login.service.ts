import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environmentApi } from '../environments/environment.api';

interface Login {
  tipDoc: string;
  numDoc: string;
  password: string;
}
@Injectable()
export class loginService {
  constructor(private http: HttpClient) {}

  login(event: Login): Observable<any> {
    3;

    const headers = new HttpHeaders({
      type: event.tipDoc,
      document: event.numDoc,
      password: event.password,
    });

    return this.http.post(
      environmentApi.urlApi + 'login',
      {},
      { headers: headers }
    );
  }
}
