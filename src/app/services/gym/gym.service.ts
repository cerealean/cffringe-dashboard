import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Gym } from "app/models/gym";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";

@Injectable()
export class GymService {

  constructor(private http:Http) { }

  getGymFromUserId(userId:number): Observable<Gym> {
    return Observable.of({ id: 1, name: "CrossFit Fringe" });
  }

}
