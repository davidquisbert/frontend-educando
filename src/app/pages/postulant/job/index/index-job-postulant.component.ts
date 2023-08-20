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

  public job: Job[];
  sesionPostulant: Postulants;

  constructor(private postulantService: PostulantService){}
  ngOnInit(): void {
    this.sesionPostulant = this.postulantService.getPostulantLoggedIn();
    this.getJob();
  }

  getJob(){
    this.postulantService.getJobArea(3)
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
