import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { QuestionService } from "../question.service";
import { UserService } from "../user.service";

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.css"]
})
export class QuestionComponent implements OnInit {
  currentUser = {};
  errors: string[] = [];
  users = {};

  constructor(
    private _questionService: QuestionService,
    private _userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {}
  // getUsers() {
  //   return this._userService
  //     .getUser()
  //     .then(data => {
  //       console.log(data);
  //       this.user = data;
  //       for (let user of this.users) {
  //         user.display = false;
  //       }
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }
  // setCurrentUser() {
  //   this.currentUser = this._userService.getCurrentUser();
  // }
}
