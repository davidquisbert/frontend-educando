import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {PostulantService} from "../../../../services/postulant.service";
import {Job, Postulants, RespuestaApi} from "../../../../interfaces/interfaces";
import {formatFecha} from "../../../../utilities/utilities";

@Component({
  selector: 'app-index-job-postulant',
  templateUrl: './index-job-postulant.component.html',
  styleUrls: ['./index-job-postulant.component.css']
})
export class IndexJobPostulantComponent implements OnInit {
  protected readonly formatFecha = formatFecha;

  job: Job[];
  jobB: Job[];
  jobSesion: Job[];
  sesionPostulant: Postulants;
  area: any;

  constructor(private postulantService: PostulantService){}
  ngOnInit(): void {
    this.sesionPostulant = this.postulantService.getPostulantLoggedIn();
    this.getJob();
  }
  /*getPostulant(){
    this.postulantService.getPostulant(this.sesionPostulant.id)
      .subscribe(
        (response: RespuestaApi<any>) => {
          if (response.code === 0) {
            this.sesionPostulant = response.data;
            this.postulantService.setPostulantLoggedIn(this.sesionPostulant);
          }
        },
        err => {
          console.log(err);
        }
      )
  }*/

  getJob(){
    this.area = this.sesionPostulant.curriculumVitae.areas.map(item => item.id);
    this.postulantService.getJobArea(this.area)
      .subscribe(
        (response: RespuestaApi<any>) => {
          if (response.code === 0) {
            this.jobB = response.data;
            this.job = this.getJobsNotInList2();
          }
        },
        err => {
          console.log(err);
        }
      )
  }

  getJobsNotInList2(): Job[] {
    const jobsNotInList2: Job[] = [];

    for (const job of this.sesionPostulant.postulations) {
      if (!this.isJobIncludedInList(job, this.jobB)) {
        jobsNotInList2.push(job);
      }
    }

    return jobsNotInList2;
  }

  isJobIncludedInList(jobToCheck: Job, jobsList: Job[]): boolean {
    return jobsList.some(job => job.id === jobToCheck.id);
  }

}
