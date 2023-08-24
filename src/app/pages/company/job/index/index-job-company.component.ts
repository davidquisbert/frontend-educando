import { Component, OnInit } from '@angular/core';
import {Company, Job, RespuestaApi} from "../../../../interfaces/interfaces";
import {CompanyService} from "../../../../services/company.service";
import { formatFecha } from 'src/app/utilities/utilities';

@Component({
  selector: 'app-index-job-company',
  templateUrl: './index-job-company.component.html',
  styleUrls: ['./index-job-company.component.css']
})
export class IndexJobCompanyComponent implements OnInit {
  job: Job[];
  company: Company;
  state = 1;

  protected readonly formatFecha = formatFecha;

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.company = this.companyService.getCompanyLoggedIn();
    this.getJob();
  }

  getJob(){
    this.companyService.getJobCompany(this.company.id)
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

}
