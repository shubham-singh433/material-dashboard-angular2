import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./login/login.component";
import { ToastrModule } from "ngx-toastr";

import { RouterModule, Routes } from "@angular/router";

import { MatCardModule } from "@angular/material/card";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RegisterComponent } from './register/register.component';

import {UserService} from '../../service/user.service'

import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from "@angular/material/snack-bar";

const route: Routes = [
 
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      {
        path: "",
        redirectTo: "/login",
        pathMatch: "full",
        // canActivate: [loginGuard],
      },
  
];

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    RouterModule.forChild(route),
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
  
})
export class AuthModule {}
