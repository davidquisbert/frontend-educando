import { Component, OnInit } from '@angular/core';
import {Company, RespuestaApi} from "../../../../interfaces/interfaces";
import {CompanyService} from "../../../../services/company.service";

@Component({
  selector: 'app-index-login-company',
  templateUrl: './index-login-company.component.html',
  styleUrls: ['./index-login-company.component.css']
})
export class IndexLoginCompanyComponent implements OnInit {
  company: Company;

  email = '';
  password = '';

  constructor(private companyService: CompanyService) { }

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

  postLoginCompany(){
    this.companyService.postLogin(this.email, this.password)
      .subscribe(
        (response: RespuestaApi<any>) => {
          if (response.code === 0 && response.data !== null) {
            this.company = response.data;
            this.companyService.setCompanyLoggedIn(this.company);
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

}
