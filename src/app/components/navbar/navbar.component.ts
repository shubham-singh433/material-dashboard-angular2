import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  searchText = new FormControl('');
  constructor(private route: Router) {}
  calling(): void {
    this.route.navigate(['/home/search-item'], {
      queryParams: { keyword: this.searchText.value },
     
    });
    //  this.searchText.reset();
  }
}
