import {Component, ElementRef, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../../../environment/enviroments";
import {Company, RespuestaApi, Type} from "../../../../interfaces/interfaces";
import {CompanyService} from "../../../../services/company.service";
import firebase from 'firebase/compat/app';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import { NgxSpinnerService } from "ngx-spinner";
import {Editor, Toolbar} from "ngx-editor";

@Component({
  selector: 'app-index-register-company',
  templateUrl: './index-register-company.component.html',
  styleUrls: ['./index-register-company.component.css']
})
export class IndexRegisterCompanyComponent {
  validate: boolean;
  company: Company;
  @ViewChild('fileInput') fileInput!: ElementRef;
  fileName = 'Esta imagen usaremos como foto de perfil.';
  areas: Type[];

  editor: Editor;
  html = '';
  toolbar: Toolbar = [

    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  email = '';
  password = '';
  name = '';
  description = '';
  address = '';
  city = '';
  webSite = '';
  photo = '';
  file = '';
  area: number;
  showName: boolean;

  phoneNumber: string = "";
  codePhoneNumber: string = "";
  identify: any;
  phoneNumberComplet: string = "";
  code_1: string = "";
  code_2: string = "";
  code_3: string = "";
  code_4: string = "";
  code_5: string = "";
  code_6: string = "";
  code: string = "";
  concatenatedInputs: string = "";
  confirmationResult: any;
  errorCode: boolean = false;
  messageError: string = "";
  showCode = false;
  constructor(private companyService: CompanyService,
              private spinner: NgxSpinnerService,
              private afAuth: AngularFireAuth,) {
  }

  ngOnInit(): void {
    this.editor = new Editor();
    this.getAreas();
  }

  getAreas(){
    this.companyService.getAreas()
      .subscribe(
        (response: RespuestaApi<any>) => {
          if (response.code === 0) {
            this.areas = response.data;
          }
        },
        err => {
          console.log(err);
        }
      )
  }

  validateForm(): boolean {
    if (this.email.trim() === '') {
      return false;
    } else if (this.password.trim() === '') {
      return false;
    } else if (this.name.trim() === '') {
      return false;
    } else if (this.description.trim() === '') {
      return false;
    } else if (this.phoneNumber === null || this.phoneNumber === undefined || this.phoneNumber === '' ) {
      return false;
    } else if (this.address.trim() === '') {
      return false;
    } else if (this.city.trim() === '') {
      return false;
    } else if (this.photo.trim() === '') {
      return false;
    } else if (this.webSite.trim() === '') {
      return false;
    }
    return true;
  }

  postSaveCompany(){
    this.companyService.postCompanySave(this.email.trim(), this.password.trim(), this.name.trim(), this.description.trim(),
      this.phoneNumber.trim(), this.email.trim(), this.webSite, this.address.trim(), this.photo, this.city, this.showName,
      this.area)
      .subscribe(
        (response: RespuestaApi<any>) => {
          if (response.code === 0) {
            this.company = response.data;
            this.companyService.setCompanyLoggedIn(this.company);
            window.location.href = '/empresa'
          } else {
          }
        },
        err => {
          console.log(err);
        }
      )
  }

  selectFile(): void {
    this.fileInput.nativeElement.click();
  }

  onFileChanged(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.photo = e.target.result;
      };

      reader.readAsDataURL(file);
      this.fileName = file.name; // Obtén el nombre del archivo y guárdalo en la variable fileName

    }
  }

  onKeyUp(event: any, nextInput: string) {
    const input = event.target;
    const length = input.value.length;
    const maxLength = 1;

    if (length === maxLength) {
      const element = document.getElementById(nextInput);
      if (element) {
        element.focus();
      } else {
        if(nextInput === "verifyCode"){

          this.concatInputs();
        }
      }
    }
  }

  concatInputs() {
    if(this.code == "") {
      this.concatenatedInputs = this.code_1 + this.code_2 + this.code_3 + this.code_4 + this.code_5 + this.code_6;
    } else {
      this.concatenatedInputs = this.code;
    }
    this.verifyOTP(this.concatenatedInputs);
  }

  async verifyOTP(code: string) {
    this.spinner.show();
    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(this.identify.verificationId, code);
      await this.afAuth.signInWithCredential(credential);
      const user = await this.afAuth.currentUser;
      if (user) {
        const uid = user.uid;
        console.log("UID del usuario autenticado:", uid);
        // this.loginUser(uid)
        this.errorCode = false;
         this.postSaveCompany();
      }

    } catch (error) {
      this.messageError = "Código incorrecto, intenta de nuevo o obtén un nuevo código"
      this.errorCode = true;
      this.spinner.hide();
    }
  }

  sendVerificationCode() {
    this.phoneNumberComplet = "+591" + this.phoneNumber;
    const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    this.afAuth.signInWithPhoneNumber(this.phoneNumberComplet, appVerifier)
      .then(confirmationResult => {
        this.confirmationResult = confirmationResult;
      })
      .catch(error => {
      });
  }


}
