import { Component, OnInit} from '@angular/core';
import { BookServiceService } from '../../service/book-service.service';
import { UserService } from "../../../../service/user.service";
import { Books } from '../../../../books';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  Details: Books[] = [];
  searchText:string="";
  items: number = 3;
  length!: number;
  page: number = 1;
  data!: any;
  name!: string;
  username!: string;
  constructor(
    private http: BookServiceService,
    private user: UserService,
    private route: Router,
    private activated: ActivatedRoute
  ) {}
  

  ngOnInit(): void {
    this.http.getData().subscribe((value) => {
      this.data = value;
      this.data = this.data.items;
      this.length = this.data.length;
    });
    // console.log( "from booklist",this.user.getUsername())
      this.username = this.user.getUsername();
        
     if (!this.username) {
       this.route.navigate(["/login"]);
     }
          // console.log("i am books list", username);
          
  this.name=this.user.getname();
  // console.log(this.name);
  }
  handlePageEvent(event: any) {
    this.items = event.pageSize;
    if (this.length < this.items) {
      this.page = 1;
    }
    // console.log(event);
  }
  Additem(id: string): void {
    this.user.getParticular(id);
  }
}
