import { Component, OnInit } from '@angular/core';
import {JobDetail, RespuestaApi} from "../../../../interfaces/interfaces";
import {PostulantService} from "../../../../services/postulant.service";
import {AdministratorService} from "../../../../services/administrator.service";
import {ActivatedRoute} from "@angular/router";
import {formatFecha} from "../../../../utilities/utilities";

@Component({
  selector: 'app-detail-job-company',
  templateUrl: './detail-job-company.component.html',
  styleUrls: ['./detail-job-company.component.css']
})
export class DetailJobCompanyComponent implements OnInit {
  job: JobDetail;
  id = 0;

  constructor(private postulantService: PostulantService,
              private administratorService: AdministratorService,
              private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.getJob();
  }

  getJob(){

    this.postulantService.getJob(this.id)
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

  updateStateJob(state: number){
    this.administratorService.putJob(this.job.id, state)
      .subscribe(
        (response: RespuestaApi<any>) => {
          if (response.code === 0) {
            this.job = response.data;
            window.location.href = '/empresa/oferta-laboral';
          }
        },
        err => {
          console.log(err);
        }
      )
  }

  protected readonly formatFecha = formatFecha;
}
