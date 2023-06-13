import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http'
import { DropdownModule } from 'primeng/dropdown';

import { ToastModule } from 'primeng/toast';

import { PasswordModule } from 'primeng/password';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SharedModule } from './shared/shared.module';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

import { FileUploadModule } from 'primeng/fileupload';
import { CombineComponent } from './combine/combine.component';
import { CreateSurveyModule } from './create-survey/create-survey.module';

@NgModule({
  declarations: [
    AppComponent,
    LoadingPageComponent,
    RegistrationFormComponent,
    CombineComponent,


  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageModule,
    TableModule,
    CardModule,
    ButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    InputTextModule,
    HttpClientModule,
    DropdownModule,
    ToastModule,
    ConfirmDialogModule,
    PasswordModule,
    SharedModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
