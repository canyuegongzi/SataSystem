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
  id ?: any  | null;
  age ?: any  | null;
  page ?: number | 1;
}
export interface EditAdminIformation extends SearchAdminParams {
  deal ?: any | null;
  fresh ?: any | null;
  identity ?: string | null;
  address ?: string | null;
  experience ?: Experiences[] | null;
  demerits ?: Demerits[] | null;
}
export interface Experiences {
  time ?: string | null;
  company ?: string |null;
  item ?: string | string;
  job ?: string |string;
}
export interface Demerits {
  time ?: string | null;
  reason ?: string | null;
  way ?: string | null;
}
export interface LoginUser extends SearchAdminParams {
  birthday ?: string | null;
  headphoto ?: string | null;
  photo ?: any | null;
  root ?: number | 1;
  desc ?: string | null;
  address ?: string | null;
}
export interface EditPass {
  oldpass: string;
  newpass: string;
}
export interface Login {
  name ?: string;
  pass ?: string;
}
