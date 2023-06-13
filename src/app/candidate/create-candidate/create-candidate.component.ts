import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VoterService } from 'src/service/voter.service';
import { ConfirmationService, MessageService } from 'primeng/api';
@Component({
  selector: 'app-create-candidate',
  templateUrl: './create-candidate.component.html',
  styleUrls: ['./create-candidate.component.css']
})
export class CreateCandidateComponent implements OnInit {
  candidateForm!: FormGroup;
  createCandidate: boolean = true;
  constructor(private router: Router,
    private vote: VoterService,
    private messageService: MessageService,) { }

  ngOnInit(): void {
    this.candidateForm = new FormGroup({
      taluka: new FormControl('', [Validators.required]),
      village: new FormControl('', [Validators.required]),
      partyname: new FormControl('', [Validators.required]),
      candidatename: new FormControl('', [Validators.required]),
      why: new FormControl('', [Validators.required]),

    })
  }
  submitCandidateForm() {
    if (this.candidateForm.valid) {
      console.log(this.candidateForm.value, 'cadidate data');
    }
    this.vote.addCandidate(this.candidateForm.value).subscribe((data:any)=>{

      this.messageService.add({
        severity: 'success',
        summary: 'Successfull',
        detail: 'Candidate add  Successfull',
      });
      console.log(data,'candidate form');
      
    })
    this.router.navigate(['candidate/nav1'])
    this.ngOnInit();

  }
  resetCandidateForm() {
    this.candidateForm.reset();
  }

  onClickCancel() {
    this.router.navigate(['candidate/nav1'])
  }

}
