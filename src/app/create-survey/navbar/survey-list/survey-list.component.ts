import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VoterService } from 'src/service/voter.service';
export interface vote {
  state: number;
  taluka: string;
  village: string;
  booth_No: string;
  family_No_for_Booth: string;
  sr_No_for_HOF_in_VL: string;
  caste: string;
  category: string;
  religion: string;
  sr_No_on_VL: string;
  name_of_voter: string;
  age_of_voter: string;
  mobile_number: string;
  adhar_no: string;
  education: string;
  occupation: string;
  vehicle: string;
  toilet: string;
  water_source: string;
  person_from_whom_you_seek_help: string;
  development: string;
  development_description: string;
  whom_are_you_going_to_vote_for: string;
  candidate_of_choice: string;
  which_issue_are_you_facing_currently: string;
}

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {
  selectedProduct: any[] = [];
  selectedValue: vote[] = []

  selecteArrayValue: any[] = [];
  Voter: vote[] = [];
  surveyForm!: FormGroup;
  displayResponsive: boolean = false;
  editForm: boolean = false;
  newVoterData: any;


  constructor(private router: Router,
    private vote: VoterService) { }

  ngOnInit(): void {
    this.display1();
    
   

    this.getData()
    this.surveyForm = new FormGroup({
      state: new FormControl('', [Validators.required]),
      taluka: new FormControl('', [Validators.required]),
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
      whom_are_you_going_to_vote_for: new FormControl('', [ Validators.required,]),
      candidate_of_choice: new FormControl('', [Validators.required]),
      which_issue_are_you_facing_currently: new FormControl('', [
        Validators.required,
      ]),
    })


    // this.vote.getimageData(this.Voter).subscribe((data1: any) => {
    //   console.log(data1, 'image data');

    // })
  }


  createSurveyFun() {
    this.router.navigate(['create-survey']);

  }
  editProduct(product: any) {

  }
  deleteProduct(product: any) {

  }
  updateSelectedProducts(data: any) {
    console.log(data);

  }
  selectAll: any
  toggleAllCheckboxes($event: any) { }

  display: boolean = false


  onClickView() {
 
    console.log(this.selecteArrayValue, 'selected value');

    this.vote.getVoterById(this.selecteArrayValue[0].adhar_no).subscribe((data: any) => {
      // console.log(data, 'edit data');
      this.newVoterData = data;
      console.log(this.newVoterData.adhar_no, 'this.newVoterData.adhar_no');

      this.surveyForm.get('state')?.patchValue(data.state);
      this.surveyForm.get('taluka')?.patchValue(data.taluka);
      this.surveyForm.get('village')?.patchValue(data.village);
      this.surveyForm.get('booth_No')?.patchValue(data.booth_No);
      this.surveyForm.get('family_No_for_Booth')?.patchValue(data.family_No_for_Booth);
      this.surveyForm.get('sr_No_for_HOF_in_VL')?.patchValue(data.sr_No_for_HOF_in_VL);
      this.surveyForm.get('caste')?.patchValue(data.caste);
      this.surveyForm.get('category')?.patchValue(data.category);
      this.surveyForm.get('religion')?.patchValue(data.religion);
      this.surveyForm.get('sr_No_on_VL')?.patchValue(data.sr_No_on_VL);
      this.surveyForm.get('name_of_voter')?.patchValue(data.name_of_voter);
      this.surveyForm.get('age_of_voter')?.patchValue(data.age_of_voter);
      this.surveyForm.get('mobile_number')?.patchValue(data.mobile_number);
      this.surveyForm.get('adhar_no')?.patchValue(data.adhar_no);
      this.surveyForm.get('education')?.patchValue(data.education);
      this.surveyForm.get('occupation')?.patchValue(data.occupation);
      this.surveyForm.get('vehicle')?.patchValue(data.vehicle);
      this.surveyForm.get('annual_income')?.patchValue(data.annual_income);
      this.surveyForm.get('toilet')?.patchValue(data.toilet);
      this.surveyForm.get('water_source')?.patchValue(data.water_source);
      this.surveyForm
        .get('person_from_whom_you_seek_help')
        ?.patchValue(data.person_from_whom_you_seek_help);
      this.surveyForm.get('development')?.patchValue(data.development);
      this.surveyForm
        .get('development_description')
        ?.patchValue(data.development_description);
      this.surveyForm
        .get('whom_are_you_going_to_vote_for')
        ?.patchValue(data.whom_are_you_going_to_vote_for);
      this.surveyForm
        .get('candidate_of_choice')
        ?.patchValue(data.candidate_of_choice);
      this.surveyForm
        .get('which_issue_are_you_facing_currently')
        ?.patchValue(data.which_issue_are_you_facing_currently);
    });
    this.display = true
  }

  onClickEdit() {
    // console.log(adhar_no, 'adhar_no/././..../');
    console.log(this.selecteArrayValue, 'selected value');

    this.vote.getVoterById(this.selecteArrayValue[0].adhar_no).subscribe((data: any) => {
      console.log(data, 'edit data');
      this.newVoterData = data;
      console.log(this.newVoterData.adhar_no, 'this.newVoterData.adhar_no');
      console.log(this.newVoterData,'voter data');

      this.surveyForm.get('state')?.patchValue(data.state);
      this.surveyForm.get('taluka')?.patchValue(data.taluka);
      this.surveyForm.get('village')?.patchValue(data.village);
      this.surveyForm.get('booth_No')?.patchValue(data.booth_No);
      this.surveyForm.get('family_No_for_Booth')?.patchValue(data.family_No_for_Booth);
      this.surveyForm.get('sr_No_for_HOF_in_VL')?.patchValue(data.sr_No_for_HOF_in_VL);
      this.surveyForm.get('caste')?.patchValue(data.caste);
      this.surveyForm.get('category')?.patchValue(data.category);
      this.surveyForm.get('religion')?.patchValue(data.religion);
      this.surveyForm.get('sr_No_on_VL')?.patchValue(data.sr_No_on_VL);
      this.surveyForm.get('name_of_voter')?.patchValue(data.name_of_voter);
      this.surveyForm.get('age_of_voter')?.patchValue(data.age_of_voter);
      this.surveyForm.get('mobile_number')?.patchValue(data.mobile_number);
      this.surveyForm.get('adhar_no')?.patchValue(data.adhar_no);
      this.surveyForm.get('education')?.patchValue(data.education);
      this.surveyForm.get('occupation')?.patchValue(data.occupation);
      this.surveyForm.get('vehicle')?.patchValue(data.vehicle);
      this.surveyForm.get('annual_income')?.patchValue(data.annual_income);
      this.surveyForm.get('toilet')?.patchValue(data.toilet);
      this.surveyForm.get('water_source')?.patchValue(data.water_source);
      this.surveyForm
        .get('person_from_whom_you_seek_help')
        ?.patchValue(data.person_from_whom_you_seek_help);
      this.surveyForm.get('development')?.patchValue(data.development);
      this.surveyForm
        .get('development_description')
        ?.patchValue(data.development_description);
      this.surveyForm
        .get('whom_are_you_going_to_vote_for')
        ?.patchValue(data.whom_are_you_going_to_vote_for);
      this.surveyForm
        .get('candidate_of_choice')
        ?.patchValue(data.candidate_of_choice);
      this.surveyForm
        .get('which_issue_are_you_facing_currently')
        ?.patchValue(data.which_issue_are_you_facing_currently);
    });

    console.log("before edit",this.surveyForm.value);
    
    this.displayResponsive = true;
    this.editForm = true;
  }

  onclickCancel() {
    this.surveyForm.reset();
  }

  onclickUpdate1() {
    console.log(this.newVoterData.adhar_no, 'adhar_no');
      console.log(this.surveyForm.value,"updated form for surway - form");
      
    this.vote
      .updateVoterData(this.surveyForm.value, this.newVoterData.adhar_no)
      .subscribe((data: any) => {
     
        console.log(data, 'Updated Data //////******');
      });
    this.displayResponsive = false;
    // window.location.reload();
    this.ngOnInit();
    this.display1();
  }

  display1() {
    this.vote.getVoterData().subscribe((data: any) => {
      console.log(data, 'Narendra/.....');
      this.Voter = data;
      this.surveyForm;

    });
    this.vote.getimageData(this.Voter).subscribe((data1: any) => {
      // console.log(data1, 'image data');
     

    })

  }

  onChecks(id: any) {
    console.log(id, 'id');

    const index = this.selecteArrayValue.indexOf(id);

    if (index !== -1) {

      this.selecteArrayValue.splice(index, 1);
      console.log(this.selecteArrayValue, 'selecteArrayValue after removal');
    } else {

      this.selecteArrayValue.push(id);
      console.log(this.selecteArrayValue, 'selecteArrayValue after addition');
    }
  }


  getData() {
    this.vote.getVoterData().subscribe((data: any) => {
      console.log(data, 'Narendra');
      this.Voter = data;
      this.surveyForm;

    });
  }
  onClickdelete() {
    alert('alert')
    this.vote.deleteVoterData(this.selecteArrayValue[0].adhar_no).subscribe((data: any) => {
      console.log(this.selecteArrayValue[0].adhar_no, 'this.selecteArrayValue[0].adhar_no');

      console.log(data, 'delted data');
    });
    window.location.reload();

  }
}


