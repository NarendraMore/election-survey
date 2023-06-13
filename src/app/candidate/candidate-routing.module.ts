import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateCandidateComponent } from './create-candidate/create-candidate.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: "candidate" },
  {path: 'createCandidate', component :CreateCandidateComponent},
  {path: 'nav1', component :NavbarComponent},
 
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule { }
