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

  // @HostListener('window:scroll', ['$event'])
  // onScroll() {
  //   let scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  //   let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;

  //   if (scroll >= 70 && width >= 995) {
  //     // Add styles for scroll
  //   } else if (scroll == 0 && width >= 995) {
  //     // Add styles for scroll back to top
  //   } else if (scroll >= 70 && width < 995) {
  //     // Add styles for scroll and small screen width
  //   } else if (scroll == 0 && width < 995) {
  //     // Add styles for scroll back to top and small screen width
  //   }
  // }

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
    return this.http.post('https://employeesapp-8ise.onrender.com/api/Gmail/sendEmail', emailData).subscribe(res => {
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
