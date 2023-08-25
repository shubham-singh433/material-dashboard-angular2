import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class BookServiceService {
  key: string = 'AIzaSyCqsdjvwH9FGuni2XsTu-KkVmjHgA0Fltw';
  constructor(private http: HttpClient) {}
  
  getData() {
    return this.http.get(
      `https://www.googleapis.com/books/v1/volumes?q=fiction&key=${this.key}`
    );
  }
  getParticular(id: string) {
    return this.http.get(
      `https://www.googleapis.com/books/v1/volumes/${id}?key=${this.key}`
    );
  }
  searchBook(value: string) {
    return this.http.get(
      `https://www.googleapis.com/books/v1/volumes?q=${value}&key=${this.key}`
    );
  }
}
