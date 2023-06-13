import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';



const routes: Routes = [
  {
    path:'',pathMatch:'full',component:LoginFormComponent
  },
 
  {
    path: 'google-login', redirectTo: 'https://accounts.google.com'
  
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginFormRoutingModule { }
export const RoutingComponent = [
  LoginFormComponent
]
