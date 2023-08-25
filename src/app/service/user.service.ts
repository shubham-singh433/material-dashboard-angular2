import { Injectable } from "@angular/core";
import { Books } from "../books";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class UserService {
  newdata: any; //used in delete function
  data: any; //get particular
  dataobj: any; //get particular
  books: Books[] = []; //get particular
  details: any; //get particular
  temp: any; //get to store
  key: string = "AIzaSyCqsdjvwH9FGuni2XsTu-KkVmjHgA0Fltw";
  // username: string="abcd";
  // name:string="shubham"
  username!: string;
  name!: string;

  constructor(private http: HttpClient) {}

  getname() {
    // console.log(this.name);
    return this.name;
  }

  //set user in local storage
  setUser(key: string, name: string): void {
    // console.log(name);

    this.details = {
      name: name,
      favourite: this.books,
    };
    localStorage.setItem(key, JSON.stringify(this.details));
  }

  //get user data local storage
  isRegistered(key: string) {
    this.username = key;

    let user = localStorage.getItem(this.username);
    if (user) {
      let user2 = JSON.parse(user);
      this.name = user2?.name;
    }
    if (localStorage.getItem(key)) {
      return true;
    } else {
      return false;
    }
    //  console.log(this.username);
  }


  getUsername(): string {
    return this.username;
  }

  getParticular(id: string) {
    // console.log(this.name)
    // console.log(this.username);
    this.http
      .get(`https://www.googleapis.com/books/v1/volumes/${id}?key=${this.key}`)
      .subscribe((res) => {
        this.data = res;
        this.dataobj = {
          id: this.data?.id,
          title: this.data?.volumeInfo?.title,
          author: this.data?.volumeInfo?.author,
          genre: this.data?.volumeInfo?.categories,
          description: this.data?.volumeInfo?.description,
        };

        // this.books.push(this.dataobj);
        this.push_book(this.username, id, this.name);
      });
  }
  push_book(username: string, id: string, name: string): void {
    let storedData = localStorage.getItem(username);
    if (storedData) {
      this.temp = JSON.parse(storedData);
      this.books = this.temp.favourite;
      let search = this.books.find((value) => value.id == id);
      if (!search) {
        this.books.push(this.dataobj);
        this.details = {
          name: name,
          favourite: this.books,
        };
        // console.log((this.details));
        localStorage.setItem(this.username, JSON.stringify(this.details));
      }
    }
    this.books = [];
  }

  getFavorite(username: string) {
    let data = localStorage.getItem(this.username);
    if (data) {
      let newdata = JSON.parse(data);
      // console.log(newdata.favourite);
      return newdata.favourite;
    }
  }

  deleteFavorite(id: string) {
    const stringdata = localStorage.getItem(this.username);
    if (stringdata) {
      this.newdata = JSON.parse(stringdata);
    }
    let data = this.newdata.favourite;
    if (data) {
      data = data.filter((item: { id: string }) => {
        return item.id != id;
      });
    }

    this.details = {
      name: this.name,
      favourite: data,
    };
    //  console.log(this.details);

    localStorage.setItem(this.username, JSON.stringify(this.details));
    return data;
  }
}
