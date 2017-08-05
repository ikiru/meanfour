import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { QuestionService } from "../question.service";
import { UserService } from "../user.service";

import "rxjs";
@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"]
})
export class AddComponent implements OnInit {
  currentUser = {};
  newQuestion = {};

  errors: string[] = [];

  constructor(
    private _questionService: QuestionService,
    private _userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {}
  // ****************************** all comp **************************

  getCurrentUser() {
    this.currentUser = this._userService.getCurrentUser;
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

  // ******************************************************************

  create() {
    this.errors = [];
    return this._questionService
      .createQuestions(this.newQuestion)
      .then(user => {
        // console.log(question);
        if (user.errors) {
          for (let key in user.errors) {
            let error = user.error[key];
            this.errors.push(error.message);
          }
        } else {
          // this._questionService.setCurrentUser(user);
          this.router.navigateByUrl("/");
        }
      })
      .catch(err => console.log(err));
  }
}
