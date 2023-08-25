import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

// import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
// import { LoginComponent } from "./module/auth/login/login.component";
// import { AuthModule } from "./module/auth/auth.module";
// import { AuthModule } from "./module/auth/auth.module";
import {authgaurdGuard} from './Guard/authguard.guard'

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./module/auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./module/books-module/books-module.module").then(
        (m) => m.BooksModuleModule
      ),
    canActivate: [authgaurdGuard],
  },
  // {
  //   path:"login",
  //   component: LoginComponent,
  // }
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule, CommonModule, BrowserModule],
})
export class AppRoutingModule {}
