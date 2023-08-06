import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Administrator
import { IndexHomeAdministratorComponent } from './pages/administrator/home/index/index-home-administrator.component';
import { IndexLoginAdministratorComponent } from './pages/administrator/login/index/index-login-administrator.component';
import { IndexJobAdministratorComponent } from './pages/administrator/job/index/index-job-administrator.component';

// POSTULANT
// job
import { IndexJobPostulantComponent } from './pages/postulant/job/index/index-job-postulant.component';
import { DetailJobPostulantComponent } from './pages/postulant/job/detail/detail-job-postulant.component';
// home
import { IndexHomePostulantComponent } from './pages/postulant/home/index/index-home-postulant.component';
import { CompanyHomePostulantComponent } from './pages/postulant/home/company/company-home-postulant.component';
import { AboutHomePostulantComponent } from './pages/postulant/home/about/about-home-postulant.component';
// profile
import { IndexProfilePostulantComponent } from './pages/postulant/profile/index/index-profile-postulant.component';
import { JobProfilePostulantComponent } from './pages/postulant/profile/job/job-profile-postulant.component';

// Comapny
import { IndexLoginCompanyComponent } from './pages/company/login/index/index-login-company.component';
import { IndexHomeCompanyComponent } from './pages/company/home/index/index-home-company.component';
import { IndexJobCompanyComponent } from './pages/company/job/index/index-job-company.component';
import { DetailJobCompanyComponent } from './pages/company/job/detail/detail-job-company.component';
import { IndesPostulantCompanyComponent } from './pages/company/postunt/indes/indes-postulant-company.component';

const routes: Routes = [
  // Postulant
  { path: '', component: IndexHomePostulantComponent},
  { path: 'trabajo', component: IndexJobPostulantComponent},
  { path: 'trabajo/:id', component: DetailJobPostulantComponent},
  { path: 'perfil', component: IndexProfilePostulantComponent},
  // Administrator
  { path: 'administrador', component: IndexHomeAdministratorComponent},
  { path: 'administrador/trabajo/:id ', component: IndexJobAdministratorComponent},
  // Company
  { path: 'empresa', component: IndexHomeCompanyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
