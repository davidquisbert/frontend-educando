import { Component, OnInit } from '@angular/core';
import {formatFecha} from "../../../../utilities/utilities";
import {Job, JobDetail, Postulants, RespuestaApi} from "../../../../interfaces/interfaces";
import {PostulantService} from "../../../../services/postulant.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-job-postulant',
  templateUrl: './detail-job-postulant.component.html',
  styleUrls: ['./detail-job-postulant.component.css']
})
export class DetailJobPostulantComponent implements OnInit {
  public job: JobDetail;
  postulant: Postulants;
  public id: number;

  protected readonly formatFecha = formatFecha;

  constructor(private postulantService: PostulantService,
              private route: ActivatedRoute,){}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.postulant = this.postulantService.getPostulantLoggedIn();
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

  postOfferJob(){
    this.postulantService.postPostlantJob(this.postulant.id, this.job.id, this.job.company.id,
      this.job.typeJob.id, this.job.areas.id)
      .subscribe(
        (response: RespuestaApi<any>) => {
          if (response.code === 0) {
            window.location.href = '/trabajo'
          }
        },
        err => {
          console.log(err);
        }
      )
  }

}
