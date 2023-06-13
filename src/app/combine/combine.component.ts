import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-combine',
  templateUrl: './combine.component.html',
  styleUrls: ['./combine.component.css']
})
export class CombineComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }
  onClickSurvey(){
 this.router.navigate(['/create-survey/nav'])
 
 
  }
  onclickCandidateSurvey(){

    this.router.navigate(['candidate/nav1'])
  }
}
