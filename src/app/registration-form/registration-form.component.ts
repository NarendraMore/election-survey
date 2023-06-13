import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VoterService } from 'src/service/voter.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
  providers: [],
})
export class RegistrationFormComponent implements OnInit {
  newUserForm!: FormGroup;

  selectedFiles?: FileList;
  currentFile!: File;

  constructor(private vote: VoterService, private router: Router) { }

  ngOnInit(): void {
    this.newUserForm = new FormGroup({
      fullname: new FormControl('', [Validators.required]),
      mail_id: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      cofirmpassword: new FormControl('', [Validators.required]),
      mobilenumber: new FormControl('', [Validators.required]),
      otp: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
    });



  }

  onclickSendOtp() {
    const mail_id = this.newUserForm.value.mail_id;
    console.log(mail_id);
    this.vote.sendOtp(mail_id).subscribe((data: any) => {
      console.log(data, 'acceted otp');
    });
  }

  onclickCancelSignup() {
    this.router.navigate(['']);
  }

  selectFile(event: any): void {
    // console.log(event.target.files);

    console.log(event.target.files[0].name);

    this.selectedFiles = event.target.files; // event.target.value = null;
  }

  onClickSignup() {
    // alert('alert');
    let docData = {
      fullname: this.newUserForm.value.fullname,
      mail_id: this.newUserForm.value.mail_id,
      password: this.newUserForm.value.password,
      cofirmpassword: this.newUserForm.value.cofirmpassword,
      mobilenumber: this.newUserForm.value.mobilenumber,
      otp: this.newUserForm.value.otp,
    };
    // console.log(docData,"docdata");

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      // console.log(file, 'inside upload method');
      if (file) {
        this.currentFile = file;
        //  console.log(this.currentFile,'current file');

        this.vote.userSignup(this.currentFile, this.newUserForm.value).subscribe((data: any) => {
          console.log(this.currentFile, "currunent file");
          console.log(this.newUserForm.value, "this.newUserForm.value");

          console.log(data, 'signup data');
        });

      }
      this.router.navigate(['/']);
    }


  }
}
