import { Component, OnInit } from '@angular/core';
import {Job, RespuestaApi} from "../../../../interfaces/interfaces";
import {PostulantService} from "../../../../services/postulant.service";
import {formatFecha} from "../../../../utilities/utilities";

@Component({
  selector: 'app-index-home-company',
  templateUrl: './index-home-company.component.html',
  styleUrls: ['./index-home-company.component.css']
})
export class IndexHomeCompanyComponent implements OnInit {
  protected readonly formatFecha = formatFecha;

  public job: Job[];

  constructor(private postulantService: PostulantService){}
  ngOnInit(): void {
    this.getJob();
  }

  getJob(){
    this.postulantService.getJobArea(10)
      .subscribe(
        (response: RespuestaApi<any>) => {
          if (response.code === 0) {
            this.job = response.data;
          }
        },
        err => {
          console.log(err);
        }
      )
  }
}
