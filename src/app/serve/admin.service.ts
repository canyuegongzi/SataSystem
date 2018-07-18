import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/internal/operators';
import {SearchAdminParams} from '../module/Adminuer';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: Http, private router: Router) { }
  /*获取所有的员工的信息或者根据id查询具体的信息*/
  getAdminInformation(par?: SearchAdminParams): Observable<any> {
    /*判断是否有参数的传入*/
    if (par) {
      /*通过id来获取具体的详细信息*/
      if (par.id) {
        console.log(par.id);
        return this.http.get('api/admininfosum', {params: {id: par.id}}).pipe(
          map(res => res.json())
        );
      /*分页查询*/
      } else if (par.page) {
        return this.http.get('api/admininfosum', {params: {page: par.page}}).pipe(
          map(res => res.json())
        );
        /*条件判断查询*/
      } else if (par.name || par.code || par.age || par.reach || par.data) {
        if (!par.code && !par.name && !par.data && Number(par.age) === -1 && Number(par.reach) === - 1 ) {
          return this.http.get('api/admininfosum', {params: {page: 1}}).pipe(
            map(res => res.json())
          );
        } else {
          return this.http.get('api/admininfosum', {params: {name : par.name, code: par.code, age: par.age, reach: par.reach, data: par.data
            }}).pipe(
            map(res => res.json()
            ));
        }
      } else if (par.name  == null &&  par.code == null && par.age === '-1' && par.reach === '-1' && par.data == null) {
        console.log(par.reach);
        return this.http.get('api/admininfosum', {params: {page: 1}}).pipe(
          map(res => res.json()));
      }
      /*没有参数的话默认传入page=1的参数，获取总的条数以及第一页的数据，年龄的分段以及公司部门的划分*/
    } else {
      return this.http.get('api/admininfosum', {params: {page: 1}}).pipe(
        map(res => res.json())
      );
    }
  }
}
