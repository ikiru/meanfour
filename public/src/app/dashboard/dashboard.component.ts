import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { UserService } from "../user.service";
import { Router } from "@angular/router";

import "rxjs";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  constructor(private _userService: UserService, private router: Router) {}

  ngOnInit() {}

  logout() {
    this._userService.logout();
    this.router.navigateByUrl("/");
  }
}
