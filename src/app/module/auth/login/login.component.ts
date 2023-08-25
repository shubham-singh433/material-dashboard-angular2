import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
// import { NotificationsComponent } from "../../../notifications/notifications.component";
// import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { UserService } from "../../../service/user.service";
// import { timeout } from 'rxjs';
import {
  MatSnackBar,
  MatSnackBarRef,
  MatSnackBarModule,
} from "@angular/material/snack-bar";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  username: string;
  loginForm:FormGroup;
 
  constructor(
    // private toastr: ToastrService,
    private route: Router,
    private user: UserService,
    private _snackBar: MatSnackBar
  ) {
    this.loginForm = new FormGroup({
       username: new FormControl(""),
       password: new FormControl(""),
     });
  }
  ngOnInit(): void {
    //  console.log("login");
  }

  onSubmit(): void {
    if (this.loginForm.value.username && this.loginForm.value.password)
      this.username =
        this.loginForm.value.username + this.loginForm.value.password;
    // console.log(this.user.isRegistered(this.username));
    if (this.user.isRegistered(this.username)) { 
      this._snackBar.open("Successfully logged In ", "ok", {
        horizontalPosition: "end",
        verticalPosition: "top",
        duration: 500,
        panelClass: "green-snackbar",
      });
      console.log("from is registered",this.user.getUsername())
      this.route.navigate(["/home/books-list"]);
      //  this.toastr.success("Login successful", "Login",{
      // timeOut:500,
      //  });
      // console.log(this.loginForm.value);
    } else {
      this._snackBar.open("Not registered", "ok", {
        horizontalPosition: "end",
        verticalPosition: "top",
        duration: 500,
        panelClass: "green-snackbar",
      });
      // });
    }
  }
}
