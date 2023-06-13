import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateRoutingModule } from './candidate-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SurveyListComponent } from './navbar/survey-list/survey-list.component';
import { CandidateReportComponent } from './navbar/candidate-report/candidate-report.component';
import { CreateCandidateComponent } from './create-candidate/create-candidate.component';
import { AnalysisComponent } from './navbar/analysis/analysis.component';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    SurveyListComponent,
    CandidateReportComponent,
    CreateCandidateComponent,
    AnalysisComponent,
 

  ],
  imports: [
    CommonModule,
    CandidateRoutingModule,
    SharedModule
  ],
  providers:[MessageService]
})
export class CandidateModule { }
