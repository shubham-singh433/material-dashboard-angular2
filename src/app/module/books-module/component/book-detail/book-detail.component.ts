import { Component } from '@angular/core';
import { BookServiceService } from '../../service/book-service.service';
import { ActivatedRoute } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent {
  arrow = faArrowLeft;
  data!: any;
  id!: string;
  constructor(
    private http: BookServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // console.log(this.id);
    this.http.getParticular(this.id).subscribe((value) => {
      this.data = value;
      // this.data = this.data.items;
      // console.log(this.length);
      console.log(this.data);
    });
  }
}
