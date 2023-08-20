import { Component, OnInit } from '@angular/core';
import {Editor, Toolbar} from "ngx-editor";

@Component({
  selector: 'app-index-job-company',
  templateUrl: './index-job-company.component.html',
  styleUrls: ['./index-job-company.component.css']
})
export class IndexJobCompanyComponent implements OnInit {
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
  typeJob = '';
  aresStudy = '';
  city = '';

  constructor() { }

  ngOnInit(): void {
    this.editor = new Editor();

  }

  validateForm(): boolean {
    if (this.title.trim() === '') {
      return false;
    } else if (this.description.trim() === '') {
      return false;
    } else if (this.typeJob.trim() === '') {
      return false;
    } else if (this.aresStudy.trim() === '') {
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
