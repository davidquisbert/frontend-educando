import { Component } from '@angular/core';
import {PostulantService} from "../../../services/postulant.service";
import {ActivatedRoute} from "@angular/router";
import {CompanyService} from "../../../services/company.service";
import {Company, Job, JobDetail, RespuestaApi} from "../../../interfaces/interfaces";
import {formatFecha} from "../../../utilities/utilities";

@Component({
  selector: 'app-detail-company',
  templateUrl: './detail-company.component.html',
  styleUrls: ['./detail-company.component.css']
})
export class DetailCompanyComponent {
  public job: Job[];
  public company: Company;
  public id: number;
  constructor(private companyService: CompanyService,
              private route: ActivatedRoute,){}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.getJob();
  }

  getJob(){
    this.companyService.getCompany(this.id)
      .subscribe(
        (response: RespuestaApi<any>) => {
          if (response.code === 0) {
            this.company = response.data;
            this.getJobCompany(this.company.id)
          }
        },
        err => {
          console.log(err);
        }
      )
  }


  getJobCompany(id: number){
    this.companyService.getJobCompany(id)
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

  protected readonly formatFecha = formatFecha;
}
