import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title: string = "employees-app"

  toggleNav: boolean = false;

  name: string;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
  }

  connect() {
    return localStorage.getItem('accessToken') != null;
  }

  logout() {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Log out successfuly!",
      showConfirmButton: false,
      timer: 2000
    });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("exp");
  }

  toggleMenu() {
    this.toggleNav = !this.toggleNav;
  }

  sendEmail(email: string) {
    const emailData = {
      recipientEmail: email,
      subject: "Congratulation to you",
      body: `Welcome, 
      From today we will update you with all the most important updates!
      Business.Employees/>`
    }
    return this.http.post('https://employees-net.onrender.com/api/Gmail/sendEmail', emailData).subscribe(res => {
      Swal.fire({
          position: "center",
          icon: "success",
          title: "Sending email to: " + email,
          showConfirmButton: false,
          timer: 1500
        });
    }, err => {
      if (err.status === 200)
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Sending email to: " + email,
          showConfirmButton: false,
          timer: 1500
        });
    })
  }
}
