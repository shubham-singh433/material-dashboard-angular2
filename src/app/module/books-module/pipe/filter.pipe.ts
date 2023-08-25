import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from '../../../service/user.service';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  username!: string;
  storedData!: any;
  constructor(private user: UserService) {
    this.username = this.user.getUsername();
  }

  transform(value: any, check: string) {
    
    if (check === 'all') {
      return value;
    } else if (check === 'Fiction') {
      // this.storedData = localStorage.getItem(this.username);
      let Data = value;
      // JSON.parse(this.storedData);

      if (Data) {
        value = Data.filter((item: { genre: any }) => {
          // console.log(item.genre[0]);
          let category=item.genre[0];
          // console.log(category.toLowerCase().includes(check.toLowerCase()))
          return category.toLowerCase().includes(check.toLowerCase());
        });
        // console.log(value);
      }
      return value;
    } else if (check === 'Hitorical') {
      //  this.storedData = localStorage.getItem(this.username);
      let Data = value;
      //  JSON.parse(this.storedData);

      if (Data) {
        value = Data.filter((item: { genre: any }) =>
          item?.genre[0].toLowerCase().includes(check.toLowerCase())
        );
        // console.log(value);
      }
      return value;
    } else if (check === 'Fantasy') {
      //  this.storedData = localStorage.getItem(this.username);
      let Data = value;
      //  JSON.parse(this.storedData);

      if (Data) {
        value = Data.filter((item: { genre: any }) =>
          item?.genre[0].toLowerCase().includes(check.toLowerCase())
        );
        // console.log(value);
      }
      return value;
    } else if (check === 'Biography & Autobiography') {
      // this.storedData = localStorage.getItem(this.username);
      // let Data = JSON.parse(this.storedData);
      let Data = value;

      if (Data) {
        value = Data.filter((item: { genre: any }) =>
          item?.genre[0].toLowerCase().includes(check.toLowerCase())
        );
        //  console.log(value);
      }
      return value;
    }
  }
}
