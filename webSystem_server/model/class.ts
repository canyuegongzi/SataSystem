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
              public reach: any,
              public phone: string,
              public star: number,
              public demerit: number,
              public id: number,
              public name: string,
              public age: number,
              public sex: number,
              public headphoto: string,
              public Id_no: string,
              public date: any,
              public code: any,
              public root: any,
              public fresh: any) {

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

export interface EditAdminIformation extends SearchAdminParams {
  identity ?: any | null;
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
export class DetailAdmin {
  constructor(
    public id: any,
    public identity: any,
    public address: string,
    public experience: Experiences[],
    public demerits: Demerits[],
    public deal: Array<string>,
    public fresh: number

  ) {
  }
}
export interface DeatilLog {
  ip: string;
  desc: string;
  date: any;
}
export class Log{
  constructor(
    public name: string,
    public date: any,
    public log: Array<DeatilLog>,
    public total: number
  ) {

  }
}
