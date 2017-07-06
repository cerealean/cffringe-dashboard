import { Component, OnInit, Inject } from '@angular/core';
import { AuthenticationService } from "../../services/authentication/authentication.service";
import { DOCUMENT } from "@angular/platform-browser";
import { User } from "../../models/user";
import { GymService } from "app/services/gym/gym.service";
import { Gym } from "app/models/gym";

@Component({
  templateUrl: "./gym-admin.component.html",
  styleUrls: ["./gym-admin.component.scss"],
  providers: [GymService]
})
export class GymAdminComponent implements OnInit {
  public document: Document;
  public user: User = this.authenticationService.getCurrentlyLoggedInUser();
  public gym: Gym = new Gym();

  constructor(
    private authenticationService: AuthenticationService,
    private gymService: GymService,
    @Inject(DOCUMENT) document:any
  ) { 
    this.document = <Document> document;
  }

  ngOnInit() {
    this.getGymForUser();
  }

  doFocus(name: string) {
    const element = this.document.getElementsByName(name)[0];
    element.scrollIntoView();
    element.focus();
  }

  private getGymForUser() {
    this.gymService
      .getGymFromUserId(this.user.id)
      .subscribe(
        (gym: Gym) => (this.gym = gym),
        error => alert("There was an error retrieving your gym information")
      );
  }
}
