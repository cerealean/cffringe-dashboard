import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class AuthenticationService {
  private readonly hash:string = "r@wr13579!#";
  private readonly currentUserKey:string = "currentUser";

  constructor() { }

  public getCurrentlyLoggedInUser():User{
    const serializedUser = localStorage.getItem(this.currentUserKey);
    let user:User = null;

    if(serializedUser){
      const unencryptedUser = CryptoJS.AES.decrypt(serializedUser, this.hash);
      user = unencryptedUser ? <User>JSON.parse(unencryptedUser) : null;
    }

    return user;
  }

  public setCurrentlyLoggedInUser(user:User){
    const jsonUser = JSON.stringify(user);
    const encryptedUser = CryptoJS.AES.encrypt(jsonUser, this.hash);
    localStorage.setItem(this.currentUserKey, encryptedUser);
  }

  public clearCurrentlyLoggedInUser(){
    localStorage.removeItem(this.currentUserKey);
  }

}
