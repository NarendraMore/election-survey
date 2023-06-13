import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Route, Router, RouterLink } from '@angular/router';
import { VoterService } from 'src/service/voter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navData: any = [];
  listFlag = false;
  reportFlag = false;
  analysisFlag = false;
  userData:any;
  imagedata1:any
  imagedata2: any;
   
  constructor(private router: Router, 
    private vote:VoterService,
    private sanitizer: DomSanitizer ) { }

  ngOnInit(): void {
    this.listFlag = true;
    this.navData = [{
      routeLink: 'create-survey/list',
    }


    ]
    
     this.userData=this.vote.loggedInData;
    //  console.log(this.userData,"user Data in nav component");
     
  //    this.vote.getimageData(this.userData).subscribe((data1: any) => {
  //     console.log(data1, 'image data');
  //  this.imagedata1 = data1.imagepath
  // //  console.log(this.imagedata1,'image');
  //  const key = 'image';
  //  const value = 'imagedata1';
  //  sessionStorage.setItem(key, this.imagedata1);
  //  const imagedata2 = sessionStorage.getItem(key);
  //  console.log(imagedata2,'session image');
   

  //   })
  }

  surveyList() {
    // this.router.navigate(['create-survey/list'])
  }
  displaymenus(menuName: string) {
    if (menuName == 'report') {
      this.reportFlag = true;
      this.listFlag = false;
      this.analysisFlag = false;
    } else
      if (menuName == 'list') {
        this.reportFlag = false;
        this.listFlag = true;
        this.analysisFlag = false;
      }else
      if (menuName == 'analyst') {
        this.reportFlag = false;
        this.listFlag = false;
        this.analysisFlag = true;
      }
  }

  onClicklogout(){
    this.router.navigate(['/'])
  }


}
