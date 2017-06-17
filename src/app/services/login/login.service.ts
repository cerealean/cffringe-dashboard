import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class LoginService {

  constructor() { }

  login(username:string, password:string):boolean{
    const currentDate = new Date().valueOf();
    const encryptedUsername = CryptoJS.AES.encrypt(username, currentDate.toString());
    const encryptedPassword = CryptoJS.AES.encrypt(password, currentDate.toString());
    //send to other service;

    const testUsername = "rawrlicious";
    const testPassword = "rawrlicious";

    const isValidPassword = username == testUsername && password == testPassword;

    return isValidPassword;
  }

  private setLocalUserInformation(){
    const fakeUserResponse = {
      Id: 55,
      FirstName: "Wendy",
      LastName: "Crawford",
      Token: "MyToken"
    };

    // localStorage.setItem("")
  }

}
