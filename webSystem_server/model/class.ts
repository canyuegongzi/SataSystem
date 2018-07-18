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
export class AdminUser {
  constructor(public job: string,
              public reach: string,
              public phone: string,
              public star: number,
              public demerits: number,
              public id: number,
              public name: string,
              public age: number,
              public sex: number,
              public headphoto: string,
              public Id_no: string,
              public date: any,
              public code: any,) {

  }
}
/*查询参数的接口*/
export interface SearchAdminParams {
  code ?: string;
  name ?: string;
  sex ?: string;
  job ?: string;
  reach ?: string;
  data ?: string;
  id ?: number;
  age ?: number;
}



