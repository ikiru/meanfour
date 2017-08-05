import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs";

@Injectable()
export class QuestionService {
  constructor(private _http: Http) {}

  createQuestions(question) {
    return this._http
      .post("/question", question)
      .map(data => data.json())
      .toPromise();
  }
  getQuestions(question) {
    return this._http
      .get("/question", question)
      .map(data => data.json())
      .toPromise();
  }
}
