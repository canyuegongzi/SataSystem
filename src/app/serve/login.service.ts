import { Injectable } from '@angular/core';
import {Router, CanActivate, Routes, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Http} from '@angular/http';
import {map} from 'rxjs/internal/operators';
import {Login} from '../module/Adminuer';
import Swal from 'sweetalert2';
import baseUrl from '../../api';

// noinspection JSAnnotator
@Injectable({
  providedIn: 'root'
})
export class LoginService implements CanActivate {
  /*路由守卫的值*/
  private allowLogin: boolean;
  private username: any;
  private userpass: any;
  /*登录用户的具体的信息*/
  private user: Object;

  constructor(private router: Router, private http: Http) {}

  canActivate() {
    /*判断当前的用户是否登录*/
    if (!JSON.parse(sessionStorage.getItem('user'))) {
      Swal('你还没有登录，请登录');
      this.router.navigate(['']);
      return false;
    } else {
      /*读取存储的用户的信息用作验证*/
      const user = JSON.parse(sessionStorage.getItem('user')).name;
      const id = JSON.parse(sessionStorage.getItem('user')).id;
      if (user && id) {
        // console.log(user);
        return true;
      } else {
        Swal('发生未错误');
        this.router.navigate(['/']);
        return false;
      }
    }
  }


  doLogin(pargrams: Login): Observable<any> {
    // this.http.get(baseUrl +'', {params: {user: pargrams.phone, pas: pargrams.password}});
    /*判断当前的登录是否是合法的*/
    if (!pargrams) {
      return;
    }
   return this.http.post(baseUrl +'api/login', {params: pargrams}).pipe(
     map(res => res.json())
   );
   /* if (pargrams.phone === '18660683370' && pargrams.password === '123456' && pargrams.protocol === true) {
      this.username = pargrams.phone;
      this.userpass = pargrams.password;
      this.user = {user: pargrams.phone, pass: pargrams.password};
      this.allowLogin = true;
      /!*如果登录是合法的，路由到具体的页面*!/
      this.router.navigate(['data']/!*, { queryParams: { name: 1 }} *!/);
      /!*将当前的登录信息存储*!/
      localStorage.setItem('user', JSON.stringify(this.user));
      console.log('登录成功！');
    } else {
      /!*否则路由到登录页面再次登录*!/
      // noinspection JSIgnoredPromiseFromCall
      this.router.navigate(['/']/!*, { queryParams: { name: 1 }} *!/);
      console.log('登录失败！');
      this.allowLogin = false;
    }*/
    /*返回是否允许登录的布尔值*/
   /* return this.allowLogin;*/
  }

  outlogin() {
    const user = JSON.parse(sessionStorage.getItem('user')).name;
    const id = JSON.parse(sessionStorage.getItem('user')).id;
    if (!user && !id) {
      console.log('你还没登录');
    } else {
      Swal({title: '确定退出登录?', showCancelButton: true}).then((value => {
        console.log(value);
        if (value.value === true) {
          sessionStorage.removeItem('user');
          this.router.navigate(['/']);
        }
      }));


    }
  }
  /*注册服务*/
  register(pargrams: any): Observable<any> {
    const mas = pargrams.repass;
   return this.http.post(baseUrl +'api/register', {params: pargrams}).pipe(
     map(res => res.json())
   );
  }
  /*验证短信码*/
  regNumber(pargrams: any): Observable<any> {
    console.log(pargrams);
    if (pargrams) {
      return this.http.post(baseUrl +'api/regnumber', { params: pargrams }).pipe(
        map(res => res.json()
        )
      );
    }
  }
  /*获取当前的登陆的操作的日志*/
  public getLoginLog(id: any, name: any, page: any): Observable<any> {
   return this.http.get(baseUrl + 'api/loginlog', {params: [id, name, page]}).pipe(
      map(res => res.json())
    );
  }
}
