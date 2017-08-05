import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { UserService } from "../user.service";

import "rxjs";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  currentUser = {};
  question: any = { id: "" };
  questions: any[] = [];

  constructor(private _userService: UserService, private router: Router) {}

  ngOnInit() {}

  // ****************************** all comp **************************

  getCurrentUser() {
    this.currentUser = this._userService.getCurrentUser();
  }

  isLoggedIn() {
    if (this._userService.getCurrentUser() == null) {
      this.router.navigateByUrl("/");
    }
  }

  logout() {
    this._userService.logout();
    this.router.navigateByUrl("/");
  }
}
// ******************************************************************
