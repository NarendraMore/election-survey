import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateSurveyRoutingModule } from './create-survey-routing.module';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SurveyListComponent } from './navbar/survey-list/survey-list.component';
import { ReportComponent } from './navbar/report/report.component';
import { AnalystComponent } from './navbar/analyst/analyst.component';
import { TooltipModule } from 'primeng/tooltip';
import {TabViewModule} from 'primeng/tabview'


@NgModule({
  declarations: [
    CreateSurveyComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SurveyListComponent,
    ReportComponent,
    AnalystComponent
  ],
  imports: [
    CommonModule,
    CreateSurveyRoutingModule,
    SharedModule,
    TooltipModule,
    TabViewModule
  ]
})
export class CreateSurveyModule { }
