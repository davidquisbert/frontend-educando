import { Component } from '@angular/core';
import {Administrator, Company} from "../../interfaces/interfaces";
import {CompanyService} from "../../services/company.service";
import {AdministratorService} from "../../services/administrator.service";

@Component({
  selector: 'app-header-administrator',
  templateUrl: './header-administrator.component.html',
  styleUrls: ['./header-administrator.component.css']
})
export class HeaderAdministratorComponent {
  sesionAdministrator: Administrator;

  constructor(private administratorService: AdministratorService){}

  ngOnInit(): void {
    this.sesionAdministrator = this.administratorService.getAdministratorLoggedIn();

  }

  logOutAdministrator(): void {
    this.administratorService.logOut();
    window.location.href = '/';
  }
}
