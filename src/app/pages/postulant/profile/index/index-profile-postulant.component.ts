import { Component, OnInit } from '@angular/core';
import {Postulants, RespuestaApi, Type, TypeTraining} from "../../../../interfaces/interfaces";
import {PostulantService} from "../../../../services/postulant.service";
import {formatDate} from "@angular/common";
import {formatFecha} from "../../../../utilities/utilities";
import {CompanyService} from "../../../../services/company.service";

@Component({
  selector: 'app-index-profile-postulant',
  templateUrl: './index-profile-postulant.component.html',
  styleUrls: ['./index-profile-postulant.component.css']
})
export class IndexProfilePostulantComponent implements OnInit {
  userSesion: Postulants;
  user: Postulants;
  areas: Type[];
  areaSelection: number;
  // Experiencia
  xCompany = '';
  xAppointment = '';
  xCity = '';
  xStartDate = '';
  xEndDate = '';
  xCurrent = false;
  xInformation = '';
  xIdTraining = 0;

  // Educacion
  eInstitution = '';
  eDegree = '';
  eStartDate = '';
  eEndDate = '';
  eInformation = '';
  eIdTraining = 0;

  // Cursos
  cInstitution = '';
  cDegree = '';
  cStartDate = '';
  cEndDate = '';
  cInformation = '';
  cIdTraining = 0;
  constructor(private postulantService: PostulantService,
              private companyService: CompanyService) { }

  ngOnInit(): void {
    this.userSesion = this.postulantService.getPostulantLoggedIn();
    this.getPostulant();
    this.getAreas();
  }

  getPostulant(): void{
    this.postulantService.getPostulant(this.userSesion.id)
      .subscribe(
        (response: RespuestaApi<any>) => {
          if (response.code === 0) {
            this.user = response.data;
            this.postulantService.setPostulantLoggedIn( this.user);
          }
        },
        err => {
          console.log(err);
        }
      )
  }

  postExperiencia(): void{
    this.postulantService.postTraining(this.user.curriculumVitae.id, this.xCompany, '', this.xAppointment, this.xCity, '',
      this.xStartDate, this.xEndDate, this.xCurrent, this.xInformation, 1, '')
      .subscribe(
        (response: RespuestaApi<any>) => {
          if (response.code === 0) {
            this.getPostulant()
          }
        },
        err => {
          console.log(err);
        }
      )
  }

  postEducation(): void{
    this.postulantService.postTraining(this.user.curriculumVitae.id, '', this.eInstitution, '', '', this.eDegree,
      this.eStartDate, this.eEndDate, false, this.eInformation, 2, '')
      .subscribe(
        (response: RespuestaApi<any>) => {
          if (response.code === 0) {
            this.getPostulant()
          }
        },
        err => {
          console.log(err);
        }
      )
  }

  postCursos(): void{
    this.postulantService.postTraining(this.user.curriculumVitae.id, '', this.cInstitution, '', '', this.cDegree,
      this.cStartDate, this.cEndDate, false, this.cInformation, 3, '')
      .subscribe(
        (response: RespuestaApi<any>) => {
          if (response.code === 0) {
            this.getPostulant()
          }
        },
        err => {
          console.log(err);
        }
      )
  }

  // AREA
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
  addArea(idArea: number): void{
    this.postulantService.getAddArea(this.user.curriculumVitae.id, idArea)
      .subscribe(
        (response: RespuestaApi<any>) => {
          if (response.code === 0) {
            this.user.curriculumVitae = response.data;
          }
        },
        err => {
          alert("El area de estudio ya se encuentra agregado");
        }
      )
  }

  deleteArea(idArea: number): void{
    this.postulantService.getRemeveArea(this.user.curriculumVitae.id, idArea)
      .subscribe(
        (response: RespuestaApi<any>) => {
          if (response.code === 0) {
            this.user.curriculumVitae = response.data;
          }
        },
        err => {
          console.log(err);
        }
      )
  }

  /* Training */

  getTrainingExperience(id: number): void{
    this.postulantService.getTraining(id)
      .subscribe(
        (response: RespuestaApi<any>) => {
          if (response.code === 0) {
            this.xCompany = response.data.company;
            this.xAppointment = response.data.appointment;
            this.xCity = response.data.city;
            this.xStartDate = response.data.startDate;
            this.xEndDate = response.data.endDate;
            this.xCurrent = response.data.current;
            this.xInformation = response.data.information;
            this.xIdTraining = response.data.id;
          }
        },
        err => {
        }
      )
  }

  getTrainingEducacion(id: number): void{
    this.postulantService.getTraining(id)
      .subscribe(
        (response: RespuestaApi<any>) => {
          if (response.code === 0) {
            this.eInstitution = response.data.institution;
            this.eDegree = response.data.degree;
            this.eStartDate = response.data.startDate;
            this.eEndDate = response.data.endDate;
            this.eInformation = response.data.information;
            this.eIdTraining = response.data.id;
          }
        },
        err => {
        }
      )
  }

  getTrainingCourse(id: number): void{
    this.postulantService.getTraining(id)
      .subscribe(
        (response: RespuestaApi<any>) => {
          if (response.code === 0) {
            this.cInstitution = response.data.institution;
            this.cDegree = response.data.degree;
            this.cStartDate = response.data.startDate;
            this.cEndDate = response.data.endDate;
            this.cInformation = response.data.information;
            this.cIdTraining = response.data.id;
          }
        },
        err => {
        }
      )
  }
  putTrainingEducacion(): void{
    this.postulantService.putTraining(this.eIdTraining, '', this.eInstitution, '', '', this.eDegree,
      this.eStartDate, this.eEndDate, false, this.eInformation)
      .subscribe(
        (response: RespuestaApi<any>) => {
          if (response.code === 0) {
            this.getPostulant()
          }
        },
        err => {
        }
      )
  }

  putTrainingExperience(): void{
    this.postulantService.putTraining(this.xIdTraining, this.xCompany, '', this.xAppointment, this.xCity, '',
      this.xStartDate, this.xEndDate, this.xCurrent,this.xInformation)
      .subscribe(
        (response: RespuestaApi<any>) => {
          if (response.code === 0) {
            this.getPostulant()
          }
        },
        err => {
        }
      )
  }

  putTrainingCourse(): void{
    this.postulantService.putTraining(this.cIdTraining, '', this.cInstitution, '', '', this.cDegree,
      this.cStartDate, this.cEndDate, false, this.cInformation)
      .subscribe(
        (response: RespuestaApi<any>) => {
          if (response.code === 0) {
            this.getPostulant()
          }
        },
        err => {
        }
      )
  }

  deleteTraining(id: number): void{
    this.postulantService.deleteTraining(id)
      .subscribe(
        (response: RespuestaApi<any>) => {
            this.getPostulant();
        },
        err => {

        }

      )

  }

  protected readonly formatDate = formatDate;
  protected readonly formatFecha = formatFecha;
}
