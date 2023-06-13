import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginFormRoutingModule,RoutingComponent } from './login-form-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';









@NgModule({
  declarations: [
    LoginFormComponent,
    RoutingComponent,
    

  ],
  imports: [
    CommonModule,
    LoginFormRoutingModule,
 
    FormsModule,
    ReactiveFormsModule,
    SharedModule,


  ],
  providers:[MessageService]
})
export class LoginFormModule { }
