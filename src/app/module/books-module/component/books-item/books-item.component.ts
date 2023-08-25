import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../service/user.service';
import { Router } from '@angular/router';
import { Books } from '../../../../books';
// import { json } from 'stream/consumers';

@Component({
  selector: 'app-books-item',
  templateUrl: './books-item.component.html',
  styleUrls: ['./books-item.component.scss'],
})
export class BooksItemComponent implements OnInit {
  selectedValue:string="all"
  data!: any;
  constructor(private route: Router, private user: UserService) {}
  ngOnInit(): void {
    let username = this.user.getUsername();
    if (!username) {
      this.route.navigate(['/login']);
    }
    const favoriteData = this.user.getFavorite(username);

    if (favoriteData !== null) {
      this.data = favoriteData;
      // console.log(this.data);
    }
    // console.log(this.data[0].id);
  }
  DeleteItem(id: string) {
    this.data = this.user.deleteFavorite(id);
    // console.log(this.data);
  }
}
