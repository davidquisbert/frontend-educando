import { Component, OnInit } from '@angular/core';
import {Administrator, RespuestaApi} from "../../../../interfaces/interfaces";
import {AdministratorService} from "../../../../services/administrator.service";

@Component({
  selector: 'app-index-login-administrator',
  templateUrl: './index-login-administrator.component.html',
  styleUrls: ['./index-login-administrator.component.css']
})
export class IndexLoginAdministratorComponent implements OnInit {
  administrator: Administrator;

  email = '';
  password = '';
  constructor(private administratorService: AdministratorService) { }

  ngOnInit(): void {
  }

  validateFormLogin(): boolean {
    if (this.email.trim() === '') {
      return false;
    } else if (this.password.trim() === '') {
      return false;
    }
    return true;
  }

  postLoginPostulant(){
    this.administratorService.postLogin(this.email, this.password)
      .subscribe(
        (response: RespuestaApi<any>) => {
          if (response.code === 0 && response.data !== null) {
            this.administrator = response.data;
            this.administratorService.setAdministratorLoggedIn(this.administrator);
            window.location.href = '/administrador'
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
    this.administratorService.logOut();
    window.location.href = '/';
  }

}
