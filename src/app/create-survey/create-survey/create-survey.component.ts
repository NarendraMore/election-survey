import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { VoterService } from 'src/service/voter.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Or ShadowDom or None

})


export class CreateSurveyComponent implements OnInit {

  steps!: MenuItem[];

  dialogFlag = false;
  surveyForm!: FormGroup;
  showPanel1: boolean = true; // Initially show the first panel
  showPanel2: boolean = false;
  statesArr = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Lakshadweep", "Puducherry"];
  yesNoDropdown = ['yes', 'no']
  myData: any[] = [];
  // talukaNamePattern ='[a-zA-Z]*';
  // villageNamePattern ='[a-zA-Z]*';
  // casteNamePattern ='[a-zA-Z]*';
  // categoryNamePattern ='[a-zA-Z]*';
  // religionPattern ='[a-zA-Z]*';
  // nameOfVoterPattern ='[a-zA-Z]*';
  // ageOfVoterPattern ='[a-zA-Z]*';
  // mobileNumberPattern ='^((\\+91-?)|0)?[5,6,7,8,9]{1}[0-9]{9}$';
  // aadharNoPattern ='^[0-9]{12}$';
  // aducationPattern ='^[a-zA-Z0-9 ]+$';
  // occupationPattern ='[a-zA-Z]*';
  // incomePattern ='^[0-9]+(\\.[0-9]{1,2})?$';
  currentStepIndex: any;
  constructor(private router: Router,
    private vote: VoterService,
    private http: HttpClient) { }

  ngOnInit(): void {
   
    this.steps = [
      { label: 'Step 1' },
      { label: 'Step 2' }
    ];

    this.surveyForm = new FormGroup({
      state: new FormControl('', [Validators.required]),
      taluka: new FormControl('', [Validators.required,]),
      village: new FormControl('', [Validators.required]),
      booth_No: new FormControl('', [Validators.required]),
      family_No_for_Booth: new FormControl('', [Validators.required]),
      sr_No_for_HOF_in_VL: new FormControl('', [Validators.required]),
      caste: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      religion: new FormControl('', [Validators.required]),
      sr_No_on_VL: new FormControl('', [Validators.required]),
      name_of_voter: new FormControl('', [Validators.required]),
      age_of_voter: new FormControl('', [Validators.required]),
      mobile_number: new FormControl('', [Validators.required]),
      adhar_no: new FormControl('', [Validators.required]),
      education: new FormControl('', [Validators.required]),
      occupation: new FormControl('', [Validators.required]),
      vehicle: new FormControl('', [Validators.required]),
      annual_income: new FormControl('', [Validators.required]),
      toilet: new FormControl('', [Validators.required]),
      water_source: new FormControl('', [Validators.required]),
      person_from_whom_you_seek_help: new FormControl('', [
        Validators.required,
      ]),
      development: new FormControl('', [Validators.required]),
      development_description: new FormControl('', [Validators.required]),
      whom_are_you_going_to_vote_for: new FormControl('', [
        Validators.required,
      ]),
      candidate_of_choice: new FormControl('', [Validators.required]),
      which_issue_are_you_facing_currently: new FormControl('', [
        Validators.required,
      ]),
    })
  }
  displayForm() {
    this.dialogFlag = true;
  }
  submitForm() {
    
    if (this.surveyForm.valid) {
      console.log(this.surveyForm.value, 'data');
      // this.router.navigate(['/'])
    }
    this.vote.addVoterData(this.surveyForm.value).subscribe((data: any) => {
      console.log(data, 'voter data');
      
    });
    this.router.navigate(['create-survey/nav'])
    this.dialogFlag = false;
    this.ngOnInit();
    // window.location.reload();
  }
  resetForm() {

    this.surveyForm.reset();
  }
  oncliClickCancel(){
        // alert('alert')
    // this.surveyForm.reset();
    this.resetForm();
    this.ngOnInit();
  }
  prevStep() {
    this.currentStepIndex--;
  }

  nextStep() {
    // alert('2')
    this.currentStepIndex++;
  }

}
