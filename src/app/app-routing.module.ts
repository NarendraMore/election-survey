import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormModule } from './login-form/login-form.module';
import { CombineComponent } from './combine/combine.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: LoginComponent

  // },

  {
    path : '',loadChildren:()=>LoginFormModule
  },
 
  {
    path: 'register',
    component: RegistrationFormComponent

  },
  {
    path: 'loading',
    component: LoadingPageComponent

  },
  {
    path: 'combine',
    component: CombineComponent

  },
 

  {
    path: 'create-survey',
    loadChildren: () => import('./create-survey/create-survey.module')
      .then(m => m.CreateSurveyModule)

  },
  {
    path: 'candidate',
    loadChildren: () => import('./candidate/candidate.module')
      .then(m => m.CandidateModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
