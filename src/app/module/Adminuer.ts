/*用户class*/
import {Http} from '@angular/http';

export class User {
  http: any;
   constructor(
     public id: number,
     public name: string,
     public age: number,
     public sex: number,
     public headphoto: string,
     ) {
     this.http = Http;
  }
  public  addUser(par: any, url: string): void {
  }
  public editUser(par: any, url: string): void {
  }
}
/*半成品*/
export class AdminUser extends User {
  constructor(public job: string,
              public reach: string,
              public phone: string,
              public demerits: string,
              public id: number,
              public name: string,
              public age: number,
              public sex: number,
              public headphoto: string) {
    super(id, name, age, sex, headphoto);

  }
}
/*查询参数的接口*/
export interface SearchAdminParams {
  code ?: string | null;
  name ?: string  | null;
  sex ?: string  | null;
  job ?: string  | null;
  reach ?: any  | null;
  data ?: string  | null;
  id ?: number  | null;
  age ?: any  | null;
  page ?: number | 1;
}



