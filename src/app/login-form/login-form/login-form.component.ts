import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { VoterService } from 'src/service/voter.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;
  forgotPassword: boolean = false
  forgotForm!: FormGroup;
  loginData: any
  constructor(private vote: VoterService,
    private router: Router,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      mail_id: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])

    });


    this.forgotForm = new FormGroup({
      user_name: new FormControl('', [Validators.required]),
      mail_id: new FormControl('', [Validators.required]),
      new_password: new FormControl('', [Validators.required]),
      confirm_password: new FormControl('', [Validators.required])
    })
  }

  // showMessage(severity: string,summary: string,detail: string,) {
  //   this.messageService.add({ severity, summary, detail });
  //   // setTimeout(() => {
  //   // }, 2000);
  // }



  onClickLogin() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value, 'login data');


    }
    const loginData = this.loginForm.value;
    console.log(loginData, 'data');

    this.vote.userLogin(loginData).subscribe((data: any) => {
      // this.messageService.add({
      //   severity: 'success',
      //   summary: 'Successfull',
      //   detail: 'Login Successfull',
      // });
      console.log(data, 'login data');

      this.vote.loggedInData = loginData;
      if (data == true) {

        console.log(this.vote.loggedInData, "logged in data");

        this.router.navigate(['/combine']);
        // this.router.navigate(['/create-survey/nav']);
      } else {
        alert('Invalid Credential')
          //  this.messageService.add({
          //   severity: 'error',
          //   summary: 'Unsuccessfullerror',
          //   detail: 'Invalid Credential',
          // });
      
      }
    },
    )


  }
  fogotPassword() {
    this.forgotPassword = true;
  }
  onClickforgotPassword() {
    if (this.forgotForm.valid) {
      console.log(this.forgotForm.value, 'forgot data');
      console.log(this.forgotForm.value.user_name, 'username');

    }
    this.vote.forgotPassword(this.forgotForm.value, this.forgotForm.value.username).subscribe((data: any) => {


      // console.log(data,'forgot');

    })
    this.forgotPassword = false;
  }
  onclickCancelForgotform() {
    this.forgotForm.reset();
  }
}
