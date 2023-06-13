import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VoterService } from 'src/service/voter.service';


interface taluka {
  talukaName: string;
}
@Component({
  selector: 'app-candidate-report',
  templateUrl: './candidate-report.component.html',
  styleUrls: ['./candidate-report.component.css']
})
export class CandidateReportComponent implements OnInit {
  talukaData: taluka[] = [];
  createCandidate: boolean = false
  talukaDialogBox: boolean = false
  candidateTalukaForm!: FormGroup;
  constructor(private router: Router,
    private vote: VoterService) { }

  ngOnInit(): void {
    this.displayTable();

    this.candidateTalukaForm = new FormGroup({
      taluka: new FormControl('', [Validators.required]),

    })

  }


  onclickDownloads() {
    this.vote.downloadCandidateAllData().subscribe((x: any) => {
      var newBlob = new Blob([x], { type: 'application/vnd.ms-excel' })
      const data = window.URL.createObjectURL(newBlob);
      var link = document.createElement('a');
      link.href = data;
      link.download = 'Election.xlsx';
      link.dispatchEvent(
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window,
        })

      );
      console.log('file Downloded');
      // console.log(data,'download file');

    })

  }
  displayTable() {
    this.vote.getCandidateData().subscribe((data: any) => {
      console.log(data, 'get aall data');
      // this.Candidates = data;
      this.filterTalukaData(data);
    })
  }


  onclickTalukaDownloads() {
    this.talukaDialogBox = true
  }
  uniqueTalukaArrays: any[] = []



  onclickDoownloadCandidateTaluka() {
    this.vote.downloadCandidateData(this.candidateTalukaForm.value.taluka).subscribe((y: any) => {
      var newBlob = new Blob([y], { type: 'application/vnd.ms-excel' })
      const data = window.URL.createObjectURL(newBlob);
      var link = document.createElement('a');
      link.href = data;
      link.download = 'Election.xlsx';
      link.dispatchEvent(
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window,
        })

      );
      console.log('file Downloded');

    })
  }


  filterTalukaData(inputData: any) {
    // console.log(inputData,'inputData.../..');

    this.talukaData = [];
    for (let i = 0; i < inputData.length; i++) {
      const talukaName = {
        talukaName: inputData[i].taluka
      }
      this.talukaData.push(talukaName)
      console.log(this.talukaData, 'taluka');

    }

    this.uniqueTalukaArrays = this.removeDuplicates(this.talukaData);
    console.log(this.uniqueTalukaArrays, 'remove duplicate array ');



  }
  removeDuplicates(array: any[]): any[] {
    return array.filter((value, index, self) => {
      return index === self.findIndex((item) => (
        item.id === value.id && item.name === value.name
      ));
    });
  }

  onclickCancels() {

  }
  createCandidateSurvey() {
    // this.createCandidate =true;
    this.router.navigate(['candidate/createCandidate'])
  }
}
