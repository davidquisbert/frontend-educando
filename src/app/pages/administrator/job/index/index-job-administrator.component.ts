import { Component, OnInit } from '@angular/core';
import {Job, RespuestaApi} from "../../../../interfaces/interfaces";
import {AdministratorService} from "../../../../services/administrator.service";
import {formatFecha} from "../../../../utilities/utilities";

@Component({
  selector: 'app-index-job-administrator',
  templateUrl: './index-job-administrator.component.html',
  styleUrls: ['./index-job-administrator.component.css']
})
export class IndexJobAdministratorComponent implements OnInit {
  job: Job[];
  state = 1;
  constructor(private administratorService: AdministratorService) { }

  ngOnInit(): void {
    this.getJob();

  }

  getJob(){
    this.administratorService.getJob()
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

  countJobsWithState(state: number): number {
    return this.job.filter(job => job.state === state).length;
  }

  protected readonly formatFecha = formatFecha;
}
