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
export class CompanyService {

  constructor(private http: HttpClient) {}

  getAreas(): Observable<object> {
    const url = `${environment.urlApi}/areas`;
    return this.http.get(url, {headers});
  }

  getTypeJob(): Observable<object> {
    const url = `${environment.urlApi}/typeJob`;
    return this.http.get(url, {headers});
  }

  getCompany(id: number): Observable<object> {
    const url = `${environment.urlApi}/company/${id}`;
    return this.http.get(url, {headers});
  }

  getJobCompany(id: number): Observable<object> {
    const url = `${environment.urlApi}/job/company/${id}`;
    return this.http.get(url, {headers});
  }

  postCompanySave(user: string, password: string, name: string, description: string, numberPhone: string, email: string,
              webSite: string, address: string, photo: string, city: string, useName: string, idArea: number): Observable<object> {
    const url = `${environment.urlApi}/company`;
    const params = {
      user,
      password,
      name,
      description,
      numberPhone,
      email,
      webSite,
      address,
      photo,
      city,
      useName,
      idArea,
    };
    return this.http.post(url, params, {headers});
  }

  postOfferJob(title: string, description: string, location: string, outstanding: boolean, idCompany: number, idTypeJob: number,
               idAreas: number): Observable<object> {
    const url = `${environment.urlApi}/job`;
    const params = {
      title,
      description,
      location,
      outstanding,
      idCompany,
      idTypeJob,
      idAreas,
    };
    return this.http.post(url, params, {headers});
  }

  postLogin(email: string, password: string): Observable<object> {
    const url = `${environment.urlApi}/user/company/login`;
    const params = {
      email,
      password,
    };
    return this.http.post(url, params, {headers});
  }


  setCompanyLoggedIn(user:any) {
    sessionStorage.setItem('sesionCompany', JSON.stringify(user));
  }

  getCompanyLoggedIn() {
    const user:any = sessionStorage.getItem('sesionCompany');
    if (user == null ||
      user === undefined) {
      return null;
    }
    return JSON.parse(user);
  }

  logOut() {
    sessionStorage.removeItem('sesionCompany');
  }
}
