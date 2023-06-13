import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VoterService {
  loggedInData: any;
  constructor(
    private http: HttpClient
  ) { }


  addVoterData(data: any) {
    return this.http.post(`${environment.url}/Submit_survey_data`, data, {

    });
  }

  userLogin(data: any) {
    return this.http.post(`${environment.url}/login`, data, {

    });
  }
  userSignup(file: File, data: any) {
    const formData: any = new FormData();
    formData.append("fullname", data.fullname);
    formData.append("mail_id", data.mail_id);
    formData.append("password", data.password);
    formData.append("cofirmpassword", data.cofirmpassword);
    formData.append("mobilenumber", data.mobilenumber);
    formData.append("otp", data.otp);
    formData.append("image", file);
    console.log(formData, 'formdata');

    const req = new HttpRequest(
      "POST",
      `${environment.url}/submit`, formData, {}
    );
    return this.http.request(req)
    // return this.http.post(`${environment.url}/submit`, data, {

    // });
  }



  sendOtp(data: any) {
    console.log("inside service: ", data);

    return this.http.get(`${environment.url}/sent_otp_mail/${data}`, {
      responseType: 'text'
    });
  }

  getVoterData() {
    return this.http.get(`${environment.url}/getallsurveydata`)
  }
  getCandidateData() {
    return this.http.get(`${environment.url}/get_all_cc`)
  }

  getimageData(data:any){
    // console.log(data.mail_id,"mail Id in service");
    
    // console.log(data,"Data in service");
    
    return this.http.get(`${environment.url}/get_user_details/${data.mail_id}`,data);
  }

  grtCandidateDataById(id:any){
    return this.http.get(`${environment.url}/getdatabyid/${id}`)
  }

  getVoterById(ano: any) {
    return this.http.get(`${environment.url}/preview_SD/${ano}`);
  }


  updateVoterData(data: any, adhar_no: any) {
    console.log(data, 'data545454654');
    console.log(adhar_no, 'adhar_no');
    return this.http.patch(`${environment.url}/update_SD/${adhar_no}`, data)
  }


  updateCandiateData(data:any,id :any){
    console.log(data,'updated candidate data');
    console.log(id,'candidate id');
    
    return this.http.patch(`${environment.url}/update_cc/${id}`,data)
  }
  
   forgotPassword(data:any , username:any){
    return this.http.patch(`${environment.url}/forget_password/${username}`,data)
    
   }


  deleteVoterData(ano: any) {
    return this.http.delete(`${environment.url}/delete/${ano}`)
  }

  downloadAllData() {
    // return this.http.get(`${environment.url}/download_all_survey_data`)
    return this.http.get(
      `${environment.url}/download_all_survey_data`,
      {

        reportProgress: true,
        responseType: "blob",
      }
    );
  }
  downloadCandidateAllData() {
    // return this.http.get(`${environment.url}/download_all_survey_data`)
    return this.http.get(
      `${environment.url}/download_all_candidate_choice`,
      {

        reportProgress: true,
        responseType: "blob",
      }
    );
  }

  downloadTalukaData(taluka: any) {
    // return this.http.get(`${environment.url}/download_SD_Tal_wise/${taluka}`)

    return this.http.get(
      `${environment.url}/download_SD_Tal_wise/${taluka}`,
      {

        reportProgress: true,
        responseType: "blob",
      }
    );
  }

  downloadCandidateData(taluka:any){
    return this.http.get(`${environment.url}/download_CC_Tal_wise/${taluka}`,{
      reportProgress:true,
      responseType: "blob",
    })
  }


// Candidate Services

addCandidate(data:any){
  return this.http.post(`${environment.url}/Submit_candidate_choice_survey`, data, {

  });
  
}


}
