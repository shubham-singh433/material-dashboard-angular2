import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
// import { NotificationsComponent } from "../../../notifications/notifications.component";
import { Router } from "@angular/router";
// import { ToastrService } from "ngx-toastr";
import { UserService } from "../../../service/user.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  username!: string;
  name!: string;
  registerForm = new FormGroup({
    username: new FormControl<string>(""),
    firstname: new FormControl<string>(""),
    lastname: new FormControl<string>(""),
    password: new FormControl<string>(""),
    confirmpassword: new FormControl<string>(""),
  });
  constructor(
    // private toastr: ToastrService,
    private route: Router,
    private user: UserService
  ) {}
  ngOnInit(): void {}

  onSubmit(): void {
    if (this.registerForm.value.firstname && this.registerForm.value.lastname) {
      this.name =
        this.registerForm.value.firstname +
        " " +
        this.registerForm.value.lastname;
    }
    if (this.registerForm.value.username && this.registerForm.value.password) {
      //reading the values from the form
      //check for a valid username
      if (
        this.check(
          this.registerForm.value.username,
          this.registerForm.value.password
        )
      ) {
        //if valid username
        this.username =
          this.registerForm.value.username + this.registerForm.value.password;

        //if  user is already registered
        if (
          !localStorage.getItem(this.username) &&
          this.registerForm.value.password ==
            this.registerForm.value.confirmpassword
        ) {
          //check if password matches or not and user does not exist privously
          // this.toastr.success(
          //   "Registeration successful",
          //   "Registered",{
          //     timeOut:500,
          //   }
          // );
          this.user.setUser(this.username, this.name);
          this.route.navigate(["/login"]);
        } else if (localStorage.getItem(this.username)) {
          // this.toastr.error("user already exist", "",{
          //   timeOut:500,
          // });
        }
      }
    }
  }

  //regx for username that is email
  check(username: string, password: string): boolean {
    var user_pattern = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    var result = user_pattern.test(username);
    console.log(result);
    if (!result) {
      // this.toastr.info("Enter valid Email", "",{
      //   timeOut:500,
      // });
    }
    return result;
  }
}
