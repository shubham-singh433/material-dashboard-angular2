import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { UserService } from "../service/user.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class authgaurdGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // console.log("HELLO I AM GUARD", this.userService.getUsername());
    let isUser = this.userService.getUsername();
    // console.log(isUser);

    if (isUser) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
