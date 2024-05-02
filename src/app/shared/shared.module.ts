




import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http'
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { PasswordModule } from 'primeng/password';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {FileUploadModule} from 'primeng/fileupload';
import {TooltipModule} from 'primeng/tooltip';
import {StepsModule} from 'primeng/steps';
@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ImageModule,
    TableModule,
    CardModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    InputTextModule,
    HttpClientModule,
    DropdownModule,
    ToastModule,
    ConfirmDialogModule,
    PasswordModule,
    InputTextareaModule,
    FileUploadModule,
    TooltipModule,
    StepsModule,
    
  ],
  exports: [
    ImageModule,
    TableModule,
    CardModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    InputTextModule,
    HttpClientModule,
    DropdownModule,
    ToastModule,
    ConfirmDialogModule,
    PasswordModule,
    InputTextareaModule,
    StepsModule
    
  ],
  providers: [
    ConfirmationService
  ]
})
export class SharedModule { }
