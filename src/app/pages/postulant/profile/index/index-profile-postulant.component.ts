import { Component, OnInit } from '@angular/core';
import {Postulants, RespuestaApi} from "../../../../interfaces/interfaces";
import {PostulantService} from "../../../../services/postulant.service";
import {formatDate} from "@angular/common";
import {formatFecha} from "../../../../utilities/utilities";

@Component({
  selector: 'app-index-profile-postulant',
  templateUrl: './index-profile-postulant.component.html',
  styleUrls: ['./index-profile-postulant.component.css']
})
export class IndexProfilePostulantComponent implements OnInit {
  userSesion: Postulants;
  user: Postulants;

  constructor(private postulantService: PostulantService) { }

  ngOnInit(): void {
    this.userSesion = this.postulantService.getPostulantLoggedIn();
    this.getPostulant();
  }

  getPostulant(): void{
    this.postulantService.getPostulant(this.userSesion.id)
      .subscribe(
        (response: RespuestaApi<any>) => {
          if (response.code === 0) {
            this.user = response.data;
          }
        },
        err => {
          console.log(err);
        }
      )
  }

  protected readonly formatDate = formatDate;
  protected readonly formatFecha = formatFecha;
}
