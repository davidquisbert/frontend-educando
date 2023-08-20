import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxEditorModule } from 'ngx-editor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';

import { IndexHomeAdministratorComponent } from './pages/administrator/home/index/index-home-administrator.component';
import { IndexLoginAdministratorComponent } from './pages/administrator/login/index/index-login-administrator.component';
import { IndexJobAdministratorComponent } from './pages/administrator/job/index/index-job-administrator.component';
import { IndexJobPostulantComponent } from './pages/postulant/job/index/index-job-postulant.component';
import { DetailJobPostulantComponent } from './pages/postulant/job/detail/detail-job-postulant.component';
import { IndexHomePostulantComponent } from './pages/postulant/home/index/index-home-postulant.component';
import { CompanyHomePostulantComponent } from './pages/postulant/home/company/company-home-postulant.component';
import { AboutHomePostulantComponent } from './pages/postulant/home/about/about-home-postulant.component';
import { IndexProfilePostulantComponent } from './pages/postulant/profile/index/index-profile-postulant.component';
import { JobProfilePostulantComponent } from './pages/postulant/profile/job/job-profile-postulant.component';
import { IndexLoginCompanyComponent } from './pages/company/login/index/index-login-company.component';
import { IndexHomeCompanyComponent } from './pages/company/home/index/index-home-company.component';
import { IndexJobCompanyComponent } from './pages/company/job/index/index-job-company.component';
import { DetailJobCompanyComponent } from './pages/company/job/detail/detail-job-company.component';
import { IndesPostulantCompanyComponent } from './pages/company/postunt/indes/indes-postulant-company.component';
import { DetailCompanyComponent } from './pages/company/detail-company/detail-company.component';
import { IndexRegisterCompanyComponent } from './pages/company/register/index/index-register-company.component';
import { HeaderCompanyComponent } from './components/header-company/header-company.component';
import { PublishJobCompanyComponent } from './pages/company/job/publish/publish-job-company.component';
import { HeaderAdministratorComponent } from './components/header-administrator/header-administrator.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    IndexHomeAdministratorComponent,
    IndexLoginAdministratorComponent,
    IndexJobAdministratorComponent,
    IndexJobPostulantComponent,
    DetailJobPostulantComponent,
    IndexHomePostulantComponent,
    CompanyHomePostulantComponent,
    AboutHomePostulantComponent,
    IndexProfilePostulantComponent,
    JobProfilePostulantComponent,
    IndexLoginCompanyComponent,
    IndexHomeCompanyComponent,
    IndexJobCompanyComponent,
    DetailJobCompanyComponent,
    IndesPostulantCompanyComponent,
    DetailCompanyComponent,
    IndexRegisterCompanyComponent,
    HeaderCompanyComponent,
    PublishJobCompanyComponent,
    HeaderAdministratorComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
