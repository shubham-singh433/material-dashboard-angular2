import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookServiceService } from '../../service/book-service.service';
import { Router } from '@angular/router';
import { UserService } from '../../../../service/user.service';
import { Books } from '../../../../books';
@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  Details: Books[] = [];
  searchText: string = '';
  items: number = 3;
  length!: number;
  page: number = 1;
  data!: any;


  
  constructor(
    private http: BookServiceService,
    private route: Router,
    private activated: ActivatedRoute,
    private user: UserService
  ) {}

  ngOnInit(): void {
    this.activated.queryParams.subscribe((params) => {
      
      this.searchText = params['keyword'];
      let username = this.user.getUsername();
      if (!username) {
        this.route.navigate(['/login']);
      }
      this.getBooks(this.searchText)
    });
  }


   getBooks(searchText:string):void
    {
       this.http.searchBook(searchText).subscribe((value) => {
          // console.log(this.searchText);
          this.data = value;
          this.data = this.data.items;
          this.length = this.data.length;
          // console.log(this.data.length);
        });
    }


  handlePageEvent(event: any) {
      if (this.length < event.pageSize) {
        this.page = 1;
      }
    this.items = event.pageSize;
  }


  Additem(id: string): void {
    this.user.getParticular(id);
  }
  
}
