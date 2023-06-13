import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { VoterService } from 'src/service/voter.service';
interface taluka{
  talukaName:string;
}
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  talukaData: taluka[] = [];
  selectedTaluka!:  taluka;
  talukaForm!: FormGroup;
  allData: any[] = [];
  constructor(private router : Router,
    private vote:VoterService,
    private primengConfig: PrimeNGConfig,) {
      this.talukaData =[];
     }

  ngOnInit(): void {
  
    this.vote.getVoterData().subscribe((data: any) => {
      // console.log(data, 'amoldata');

      this.allData = data;
      console.log(this.allData, 'All Data');

      this.filterTalukaData(data);
   
    });
    this.primengConfig.ripple = true;
    this.talukaForm = new FormGroup({
      taluka: new FormControl('',[Validators.required]),
    })
  }


  createSurveyFun() {
    this.router.navigate(['create-survey']);

  }
  onclickDownload() {


    this.vote.downloadAllData().subscribe((x: any) => {
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
  dropDownBox :boolean=false
  onclickDoownloadTaluka() {
    this.dropDownBox = true;

  }
  selectedtaluka(selectedTaluka:any){
    console.log(this.talukaData,'on change method');
    this.selectedTaluka = selectedTaluka.value
    console.log(this.selectedTaluka,'on change method => selectedTaluka');
    
  }
  uniqueTalukaArray :any[]=[]
  onclickDoownloadTaluka1() {

    console.log(this.selectedTaluka,'selected taluka.//.');
    
       
        this.vote.downloadTalukaData(this.talukaForm.value.taluka).subscribe((y: any) => {
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
          // console.log(this.talukaData,'taluka');

        }
       
         this.uniqueTalukaArray = this.removeDuplicates(this.talukaData);
        console.log(this.uniqueTalukaArray,'remove duplicate array ');
        
        
    
      }
      removeDuplicates(array: any[]): any[] {
        return array.filter((value, index, self) => {
          return index === self.findIndex((item) => (
            item.id === value.id && item.name === value.name
          ));
        });
      }

      onclickCancel(){
        
        this.talukaForm.reset();
      }
}
