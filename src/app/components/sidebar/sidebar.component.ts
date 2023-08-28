import { Component, OnInit } from "@angular/core";

declare const $: any;
@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {


  constructor() {}

  ngOnInit() {

   
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
  checking()
  {
    alert("hello there ");
  }
}
