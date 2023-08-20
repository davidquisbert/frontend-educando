import { Component } from '@angular/core';
import {PostulantService} from "../../services/postulant.service";
import {CompanyService} from "../../services/company.service";
import {Router} from "@angular/router";
import {Company} from "../../interfaces/interfaces";

@Component({
  selector: 'app-header-company',
  templateUrl: './header-company.component.html',
  styleUrls: ['./header-company.component.css']
})
export class HeaderCompanyComponent {
  sesionCompany: Company;

  constructor(private companyService: CompanyService){}

  ngOnInit(): void {
    this.sesionCompany = this.companyService.getCompanyLoggedIn();

  }

  logOutCompany(): void {
    this.companyService.logOut();
    window.location.href = '/';
  }

}
