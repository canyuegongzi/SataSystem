import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/internal/operators';
import {EditAdminIformation, SearchAdminParams} from '../module/Adminuer';
import {post} from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public subject = new Subject<any>();
  public formDetail: any;
  constructor(private http: Http, private router: Router) { }
  /*获取所有的员工的信息或者根据id查询具体的信息*/
  getAdminInformation(par?: SearchAdminParams): Observable<any> {
    /*判断是否有参数的传入*/
    if (par) {
      /*通过id来获取具体的详细信息*/
      if (par.id) {
        // console.log(par.id);
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
        // console.log(par.reach);
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
  /*删除用户*/
  deleteAdminInformation(par: SearchAdminParams): Observable<any> {
    // console.log(par);
    if (par) {
      console.log(par);
      return this.http.get('api/admindelete', {params: {id: par.id}}).pipe(
        map(res => res.json())
      );
    }
  }
  getdetailInformation(id): Observable<EditAdminIformation> {
    if (id) {
     return this.http.get('api/admindetail', {params: {id: id}}).pipe(
        map(res => res.json())
      );
    }
  }
  /*修改*/
  editAdminInformation(par: EditAdminIformation, id: number): Observable<any> {
    if (par) {
      par.id = id;
      return  this.http.post('api/adminedit', {params: par}).pipe(
        map(res => res.json())
      );
    }
}
  /*添加*/
  addAdminInformation(par: EditAdminIformation): Observable<any> {
    // console.log(par);
    if (par) {
      return this.http.post('api/addadmin', {params: par}).pipe(
        map(res => res.json()
        )
      );
    }
  }
  /*注册权限*/
  regAdminRoot(id: number, root: number): Observable<any> {
    if (id && root) {
     return this.http.post('api/adminroot', {params: {id: id, root: root}}).pipe(
        map(res => res.json()
        )
      );
    } else {
      return;
    }
  }
  setFormDetail(par: any) {
    console.log(par);
    this.formDetail = par;
    this.subject.next(par);
  }
  clearFormDetail() {
    this.subject.next();
  }
  getFormDetail(): Observable<any> {
    return this.subject.asObservable();
  }
}
