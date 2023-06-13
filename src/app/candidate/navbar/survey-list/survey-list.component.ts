import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VoterService } from 'src/service/voter.service';
export interface candidate {
  taluka: number;
  village: string;
  partyname: string;
  candidatename: string;
  why: string;
}

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {
  selectedProduct: any[] = [];
  selectedValue: candidate[] = []

  selecteArrayValue1: any[] = [];
  Candidates: candidate[] = [];

  displayResponsive: boolean = false;
  displayEditCandiate: boolean = false;
  displayViewCandiate: boolean = false;
  editForm: boolean = false;
  newVoterData: any;
  editCandidateForm!: FormGroup;

  showTooltip = false;
  showTooltip1 = false;
  constructor(private router: Router,
    private vote: VoterService) { }

  ngOnInit(): void {
    this.displayTable();
    this.editCandidateForm = new FormGroup({
      taluka: new FormControl('', [Validators.required]),
      village: new FormControl('', [Validators.required]),
      partyname: new FormControl('', [Validators.required]),
      candidatename: new FormControl('', [Validators.required]),
      why: new FormControl('', [Validators.required]),
    })


  }

displayTable(){
  this.vote.getCandidateData().subscribe((data: any) => {
    console.log(data, 'get aall data');
    this.Candidates = data;
  })
}


  selectAll: any
  toggleAllCheckboxes($event: any) { }

  display: boolean = false



  onClickView() {
   
    this.vote.grtCandidateDataById(this.selecteArrayValue1[0].id).subscribe((data: any) => {
      console.log(data, 'selecte data');
      this.editCandidateForm.get('taluka')?.patchValue(data.taluka);
      this.editCandidateForm.get('village')?.patchValue(data.village);
      this.editCandidateForm.get('partyname')?.patchValue(data.partyname);
      this.editCandidateForm.get('candidatename')?.patchValue(data.candidatename);
      this.editCandidateForm.get('why')?.patchValue(data.why);
    });
    this.displayViewCandiate = true
  }

  onClickEdit() {
    console.log(this.selecteArrayValue1, 'Selected value');
    this.vote.grtCandidateDataById(this.selecteArrayValue1[0].id).subscribe((data: any) => {
      console.log(data, 'selecte data');
      this.editCandidateForm.get('taluka')?.patchValue(data.taluka);
      this.editCandidateForm.get('village')?.patchValue(data.village);
      this.editCandidateForm.get('partyname')?.patchValue(data.partyname);
      this.editCandidateForm.get('candidatename')?.patchValue(data.candidatename);
      this.editCandidateForm.get('why')?.patchValue(data.why);
      
    });
    this.displayEditCandiate = true;
    
  }

  onclickUpdateCandidate() {
    // console.log(this.editCandidateForm.value, 'this.editCandidateForm.value');
    // console.log(this.selecteArrayValue1[0].id, 'this.selecteArrayValue1[0].id');
    this.vote.updateCandiateData(this.editCandidateForm.value, this.selecteArrayValue1[0].id).subscribe((data: any) => {
      console.log(data, 'updated data');

    })
    this.displayEditCandiate = false;
    this.displayTable();
  }
  createCandidateSurvey() {
    // this.createCandidate =true;
    this.router.navigate(['candidate/createCandidate'])
  }


  onChecks(id: any) {
    console.log(id, 'id');

    const index = this.selecteArrayValue1.indexOf(id);

    if (index !== -1) {

      this.selecteArrayValue1.splice(index, 1);
      console.log(this.selecteArrayValue1, 'selecteArrayValue after removal');
    } else {

      this.selecteArrayValue1.push(id);
      console.log(this.selecteArrayValue1, 'selecteArrayValue after addition');
    }
  }

  onclickCancelCandidate() {
  this.editCandidateForm.reset();
  }


}


