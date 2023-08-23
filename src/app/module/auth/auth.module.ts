import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';


import { RouterModule, Routes } from "@angular/router";

import { MatCardModule } from "@angular/material/card";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
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
  imports: [RouterModule.forChild(routes),CommonModule, ReactiveFormsModule, FormsModule, MatCardModule],
})
export class AuthModule {}
