import { Injectable } from '@angular/core';
import {Router, CanActivate, Routes, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Http} from '@angular/http';
import {map} from 'rxjs/internal/operators';

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
    /*读取存储的用户的信息用作验证*/
    const user = JSON.parse(localStorage.getItem('user'));
    /*判断当前的用户是否登录*/
    if (user.user === this.username && user.pass === this.userpass && this.allowLogin === true) {
      return true;
    } else {
      /*如果当前的用户没有登录则路由到登录的页面*/
      // noinspection JSIgnoredPromiseFromCall
      this.router.navigate(['']);
      return false;
    }
  }
  doLogin(pargrams: any) {
    // this.http.get('', {params: {user: pargrams.phone, pas: pargrams.password}});
    /*判断当前的登录是否是合法的*/
    if (pargrams.phone === '18660683370' && pargrams.password === '123456' && pargrams.protocol === true) {
      this.username = pargrams.phone;
      this.userpass = pargrams.password;
      this.user = {user: pargrams.phone, pass: pargrams.password};
      this.allowLogin = true;
      /*如果登录是合法的，路由到具体的页面*/
      // noinspection JSIgnoredPromiseFromCall
      this.router.navigate(['home']/*, { queryParams: { name: 1 }} */);
      /*将当前的登录信息存储*/
      localStorage.setItem('user', JSON.stringify(this.user));
      console.log('登录成功！');
    } else {
      /*否则路由到登录页面再次登录*/
      // noinspection JSIgnoredPromiseFromCall
      this.router.navigate(['home']/*, { queryParams: { name: 1 }} */);
      console.log('登录失败！');
      this.allowLogin = false;
    }
    /*返回是否允许登录的布尔值*/
    return this.allowLogin;
  }
  outlogin(pargrams: any) {
  }
  register(pargrams: any) {
    const mas = pargrams.repass;
    this.regNumber(mas)
      .subscribe(
        res => {
          setTimeout( success => {
            console.log('注册成功!');
            // noinspection JSIgnoredPromiseFromCall
            this.router.navigateByUrl('');
          }, 5000);
      },
        error => {
          console.log('注册失败！');
        }
    );
  }
  /*验证短信码*/
  regNumber(pargrams: any): Observable<any> {
    return this.http.get('./res.json', { params: {par: pargrams} }).pipe(
      map(res => {
        res.json();
      })
    );

  }
}
