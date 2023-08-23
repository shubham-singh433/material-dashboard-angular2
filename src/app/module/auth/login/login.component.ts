import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { UserService } from "../../../service/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  username!: string;
  loginForm = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),
  });
  constructor(
    private toastr: ToastrService,
    private route: Router,
    private user: UserService
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(): void {
    if (this.loginForm.value.username && this.loginForm.value.password)
      this.username =
        this.loginForm.value.username + this.loginForm.value.password;
    if (this.user.isRegistered(this.username)) {
      this.toastr.success("Login successful", "Login", {
        timeOut: 1000,
      });
      console.log(this.loginForm.value);
      this.route.navigate(["/home/books-list"]);
    } else {
      this.toastr.error("Not registered", "register", {
        timeOut: 2000,
      });
    }
  }
}
