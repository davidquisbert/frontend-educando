import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environment/enviroments';

const headers = new HttpHeaders()
  .set('Access-Control-Allow-Origin', '*')
  .set('Content-Type', 'application/json');
@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

  constructor(private http: HttpClient) {}

  postLogin(email: string, password: string): Observable<object> {
    const url = `${environment.urlApi}/user/administrator/login`;
    const params = {
      email,
      password,
    };
    return this.http.post(url, params, {headers});
  }


  setAdministratorLoggedIn(user:any) {
    sessionStorage.setItem('sesionAdministrator', JSON.stringify(user));
  }

  getAdministratorLoggedIn() {
    const user:any = sessionStorage.getItem('sesionAdministrator');
    if (user == null ||
      user === undefined) {
      return null;
    }
    return JSON.parse(user);
  }

  logOut() {
    sessionStorage.removeItem('sesionAdministrator');
  }
}
