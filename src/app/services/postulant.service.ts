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
export class PostulantService {

  constructor(private http: HttpClient) {}

  getPostulant(id: number): Observable<object> {
    const url = `${environment.urlApi}/postulant/${id}`;
    return this.http.get(url, {headers});
  }

  getJob(id: number): Observable<object> {
    const url = `${environment.urlApi}/job/${id}`;
    return this.http.get(url, {headers});
  }

  getJobArea(areaIds: any): Observable<object> {
    const url = `${environment.urlApi}/job/areas`;
    const params = {
      areaIds,
    };
    return this.http.post(url, params, {headers});
  }

  postPostulantSave(user: string, password: string, name: string, lastName: string, address: string, nacionality: string,
                   gender: string, photo: string, numberPhone: string, birthdate: string, student: boolean): Observable<object> {
    const url = `${environment.urlApi}/postulant`;
    const params = {
      user,
      password,
      name,
      lastName,
      address,
      nacionality,
      gender,
      photo,
      numberPhone,
      birthdate,
      student,
    };
    return this.http.post(url, params, {headers});
  }

  postPostlantJob(idPostulant: number, idJob: number, idCompany: number, idTypeJob: number, idArea: number): Observable<object> {
    const url = `${environment.urlApi}/job/add`;
    const params = {
      idPostulant,
      idJob,
      idCompany,
      idTypeJob,
      idArea,
    };
    return this.http.post(url, params, {headers});
  }

  postTraining(idCV: number, company: string, institution: string, appointment: string, city: string,
         degree: string, startDate: string, endDate: string, current: boolean, information: string,
               idTypeTraining: number, descriptionCV: string): Observable<object> {
    const url = `${environment.urlApi}/curriculum-vitae`;
    const params = {
      idCV,
      company,
      institution,
      appointment,
      city,
      degree,
      startDate,
      endDate,
      current,
      information,
      idTypeTraining,
      descriptionCV
    };
    return this.http.post(url, params, {headers});
  }

  getTraining(id: number): Observable<object> {
    const url = `${environment.urlApi}/training/${id}`;
    return this.http.get(url, {headers});
  }

  putTraining(id: number, company: string, institution: string, appointment: string, city: string, degree: string,
              startDate: string, endDate: string, current: boolean, information: string,): Observable<object> {
    const url = `${environment.urlApi}/training/${id}`;
    const params = {
      company,
      institution,
      appointment,
      city,
      degree,
      startDate,
      endDate,
      current,
      information
    };
    return this.http.put(url, params, {headers});
  }

  deleteTraining(id: number): Observable<object> {
    const url = `${environment.urlApi}/training/${id}`;
    return this.http.delete(url, {headers});
  }

  getAddArea(idCV: number, idArea: number): Observable<object> {
    const url = `${environment.urlApi}/curriculum-vitae/addArea/idCV=${idCV}&idArea=${idArea}`;
    return this.http.get(url, {headers});
  }

  getRemeveArea(idCV: number, idArea: number): Observable<object> {
    const url = `${environment.urlApi}/curriculum-vitae/removeArea/idCV=${idCV}&idArea=${idArea}`;
    return this.http.get(url, {headers});
  }



  postLogin(email: string, password: string): Observable<object> {
      const url = `${environment.urlApi}/user/login`;
      const params = {
          email,
          password
      };
      return this.http.post(url, params, {headers});
  }

  setPostulantLoggedIn(user:any) {
    sessionStorage.setItem('sesionPostulant', JSON.stringify(user));
  }

  getPostulantLoggedIn() {
    const user:any = sessionStorage.getItem('sesionPostulant');
    if (user == null ||
      user === undefined) {
      return null;
    }
    return JSON.parse(user);
  }

  logOut() {
    sessionStorage.removeItem('sesionPostulant');
  }
}
