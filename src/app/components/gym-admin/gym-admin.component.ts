import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../services/authentication/authentication.service";
import { User } from "../../models/user";
import { GymService } from "app/services/gym/gym.service";

@Component({
  templateUrl: "./gym-admin.component.html",
  styleUrls: ["./gym-admin.component.scss"]
})
export class GymAdminComponent implements OnInit {
  public user: User = this.authenticationService.getCurrentlyLoggedInUser();
  public gym = {};

  constructor(
    private authenticationService: AuthenticationService,
    private gymService: GymService
  ) { }

  ngOnInit() { }
  
  private getGymForUser() {
    this.gymService.getGymFromUserId(this.user.id).subscribe((response:Response) => this.gym = response.json());
  }
}
