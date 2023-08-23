import { Component } from '@angular/core';
import {PostulantService} from "../../services/postulant.service";
import {Company, Postulants, RespuestaApi} from "../../interfaces/interfaces";
import {CompanyService} from "../../services/company.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  postulant: Postulants;
  sesionPostulant: Postulants;
  sesionCompany: Company;

  validate: boolean;
  validateLogin = '';
  emailPostulant = '';
  passwordPostulant = '';

  name = '';
  lastName = '';
  email = '';
  password = '';
  date = '';
  gender = '';
  photo = '';
  numberPhone = '';
  address = '';
  city = '';
  civilStatus = '';
  student = false;

  constructor(private postulantService: PostulantService,
              private companyService: CompanyService,
              private router: Router){}

  ngOnInit(): void {
    this.sesionPostulant = this.postulantService.getPostulantLoggedIn();
    this.sesionCompany = this.companyService.getCompanyLoggedIn();

  }

  validateForm(): boolean {
    if (this.name.trim() === '') {
      return false;
    } else if (this.lastName.trim() === '') {
      return false;
    } else if (this.email.trim() === '') {
      return false;
    } else if (this.password.trim() === '') {
      return false;
    } else if (this.date.trim() === '') {
      return false;
    } else if (this.gender.trim() === '') {
      return false;
    } else if (this.numberPhone === null || this.numberPhone === undefined || this.numberPhone === '' ) {
      return false;
    } else if (this.address.trim() === '') {
      return false;
    } else if (this.city.trim() === '') {
      return false;
    } else if (this.civilStatus.trim() === '') {
      return false;
    }
    return true;
  }

  postSavePostulant(){
    this.postulantService.postPostulantSave(this.email.trim(), this.password.trim(), this.name.trim(), this.lastName.trim(),
      this.address.trim(), this.city, this.gender, this.photo, this.numberPhone, this.date, this.student)
      .subscribe(
        (response: RespuestaApi<any>) => {
          if (response.code === 0) {
            this.postulant = response.data;
            this.postulantService.setPostulantLoggedIn(this.postulant);
            window.location.href = '/trabajo'
          } else {
          }
        },
        err => {
          console.log(err);
        }
      )
  }

  validateFormLogin(): boolean {
    if (this.emailPostulant.trim() === '') {
      return false;
    } else if (this.passwordPostulant.trim() === '') {
      return false;
    }
    return true;
  }

  postLoginPostulant(){
    this.postulantService.postLogin(this.emailPostulant, this.passwordPostulant)
      .subscribe(
        (response: RespuestaApi<any>) => {
          if (response.code === 0 && response.data !== null) {
              this.postulant = response.data;
              this.postulantService.setPostulantLoggedIn(this.postulant);
              window.location.href = '/trabajo'
          } else {
            console.log("Usuario no encontrado");
          }
        },
        err => {
          console.log(err);
        }
      )
  }

  logOutPostulant(): void {
    this.postulantService.logOut();
    window.location.href = '/';
  }

  logOutCompany(): void {
    this.companyService.logOut();
    window.location.href = '/';
  }
}
