import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import Swal from "sweetalert2";

@Injectable({
  providedIn: "root"
})

export class AuthGuardService implements CanActivate {

  constructor(private _router: Router, private _http: HttpClient) { }

  async canActivate() {
    if (localStorage.getItem("accessToken") === null) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "You are not connected!",
        showConfirmButton: false,
        timer: 1500
      });
      this._router.navigate(["/connection/login"]);
      return false;
    } else {
      const token = localStorage.getItem("accessToken");
      const headers = new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      });

      try {
        await this._http.get("https://employees-net.onrender.com/api/Auth", { headers: headers }).toPromise();
        return true;
      } catch (err) {
        if (err.status === 401) {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "The identification has expired!",
            showConfirmButton: false,
            timer: 1500
          });
          this._router.navigate(["/connection/login"]);
        }
        return false;
      }
    }
  }
}

