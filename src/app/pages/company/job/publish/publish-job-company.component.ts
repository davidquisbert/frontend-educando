import {Component} from '@angular/core';
import {Editor, Toolbar} from "ngx-editor";
import {Company, RespuestaApi, Type} from "../../../../interfaces/interfaces";
import {CompanyService} from "../../../../services/company.service";

@Component({
  selector: 'app-publish-job-company',
  templateUrl: './publish-job-company.component.html',
  styleUrls: ['./publish-job-company.component.css']
})
export class PublishJobCompanyComponent {
  areas: Type[];
  listTypeJob: Type[];

  company: Company;
  editor: Editor;
  html = '';
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  title = '';
  description = '';
  typeJob: number;
  aresStudy: number;
  city = '';

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.company = this.companyService.getCompanyLoggedIn();
    this.editor = new Editor();
    this.getAreas();
    this.getTypeJob();
  }

  getAreas(){
    this.companyService.getAreas()
      .subscribe(
        (response: RespuestaApi<any>) => {
          if (response.code === 0) {
            this.areas = response.data;
          }
        },
        err => {
          console.log(err);
        }
      )
  }

  getTypeJob(){
    this.companyService.getTypeJob()
      .subscribe(
        (response: RespuestaApi<any>) => {
          if (response.code === 0) {
            this.listTypeJob = response.data;
          }
        },
        err => {
          console.log(err);
        }
      )
  }

  postOfferJob(){
    this.companyService.postOfferJob(this.title, this.description, this.city, false, this.company.id,
      this.typeJob, this.aresStudy)
      .subscribe(
        (response: RespuestaApi<any>) => {
          if (response.code === 0) {
            this.areas = response.data;
            window.location.href = '/'
          }
        },
        err => {
          console.log(err);
        }
      )
  }

  validateForm(): boolean {
    if (this.title.trim() === '') {
      return false;
    } else if (this.description.trim() === '') {
      return false;
    } else if (this.typeJob === 0 || this.typeJob === undefined) {
      return false;
    } else if (this.typeJob === 0 || this.typeJob === undefined) {
      return false;
    } else if (this.city.trim() === '') {
      return false;
    }
    return true;
  }

  save(): void {
    console.log(this.description);
  }

}
