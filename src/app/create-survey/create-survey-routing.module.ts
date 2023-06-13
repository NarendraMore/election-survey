import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: "create-survey" },
  { path: 'create-survey', component: CreateSurveyComponent },
  { path: 'nav', component: NavbarComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateSurveyRoutingModule { }
