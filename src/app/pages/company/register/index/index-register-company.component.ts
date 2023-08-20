import { Component } from '@angular/core';

@Component({
  selector: 'app-index-register-company',
  templateUrl: './index-register-company.component.html',
  styleUrls: ['./index-register-company.component.css']
})
export class IndexRegisterCompanyComponent {
  validate: boolean;

  email = '';
  password = '';
  name = '';
  description = '';
  numberPhone = '';
  address = '';
  city = '';
  showName: boolean;


  validateForm(): boolean {
    if (this.email.trim() === '') {
      return false;
    } else if (this.password.trim() === '') {
      return false;
    } else if (this.name.trim() === '') {
      return false;
    } else if (this.description.trim() === '') {
      return false;
    } else if (this.numberPhone === null || this.numberPhone === undefined || this.numberPhone === '' ) {
      return false;
    } else if (this.address.trim() === '') {
      return false;
    } else if (this.city.trim() === '') {
      return false;
    }
    return true;
  }
}
