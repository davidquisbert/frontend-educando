import {Component, OnInit} from '@angular/core';
import {JobDetail, RespuestaApi} from "../../../../interfaces/interfaces";
import {PostulantService} from "../../../../services/postulant.service";
import {ActivatedRoute} from "@angular/router";
import { formatFecha } from 'src/app/utilities/utilities';
import {AdministratorService} from "../../../../services/administrator.service";

@Component({
  selector: 'app-detail-job-administrator',
  templateUrl: './detail-job-administrator.component.html',
  styleUrls: ['./detail-job-administrator.component.css']
})
export class DetailJobAdministratorComponent implements OnInit {
  job: JobDetail;
  id = 0;


  protected readonly formatFecha = formatFecha;

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
          }
        },
        err => {
          console.log(err);
        }
      )
  }
}
