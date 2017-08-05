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
  getQuestions() {
    return this._questionService
      .getQuestions()
      .then(data => {
        console.log(data);
        this.question = data;
        for (let questions of this.question) {
          question.display = false;
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  // setCurrentUser() {
  //   this.currentUser = this._userService.getCurrentUser();
  // }
}
