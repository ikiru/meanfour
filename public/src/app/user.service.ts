import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs";

@Injectable()
export class UserService {
  constructor(private _http: Http) {}

  create(user) {
    return this._http.post("/user", user).map(data => data.json()).toPromise();
  }

  logout() {
    sessionStorage.removeItem("currentUser");
  }

  setCurrentUser(user) {
    sessionStorage.setItem("currentUser", JSON.stringify(user));
  }

  getCurrentUser() {
    return JSON.parse(sessionStorage.getItem("currentUser"));
  }
}
