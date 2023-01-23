import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private httpService:HttpService) { 

  }

  userRegister(reqdata: any) {
    let header = {
      headers: new HttpHeaders({    //
        'Content-Type': 'application/json'  //request and response are in the format of json means key-value pair
      })
    }
    return this.httpService.postService('User/register', reqdata, false, header)
  }
  userSignin(reqdata: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService('User/login',reqdata,false,header)
  }

  userForgotemail(reqdata: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService('User/forgotpassword?email=srujantesting123%40gmail.com',reqdata,false,header)
  }

  userResetPassword(reqdata:any,token:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization :'Bearer '+ token
      })
    }
    return this.httpService.putService('User/resetPassword', reqdata,true,header)
  }
  }


