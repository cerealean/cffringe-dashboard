import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { AuthenticationService } from '../authentication/authentication.service';
import { User } from '../../models/user';

@Injectable()
export class LoginService {

  constructor(
    private authenticationService:AuthenticationService
  ) { }

  login(username:string, password:string):User{
    const currentDate = new Date().valueOf();
    const encryptedUsername = CryptoJS.AES.encrypt(username, currentDate.toString());
    const encryptedPassword = CryptoJS.AES.encrypt(password, currentDate.toString());
    //send to other service;

    const testUsername = "rawrlicious";
    const testPassword = "rawrlicious";

    const isValidPassword = username == testUsername && password == testPassword;

    if(isValidPassword){
      this.setLocalUserInformation();
    }

    return this.authenticationService.getCurrentlyLoggedInUser();
  }

  logout(){
    this.authenticationService.clearCurrentlyLoggedInUser();
  }

  private setLocalUserInformation(){
    const currentDate = new Date();
    const fakeUserResponse:User = {
      id: 55,
      firstName: "Wendy",
      lastName: "Crawford",
      authentication: {
        token: "myToken",
        loggedIn: currentDate,
        expires: new Date(currentDate.setHours(currentDate.getHours() + 3))
      }
    };
    this.authenticationService.setCurrentlyLoggedInUser(fakeUserResponse);
  }

}
