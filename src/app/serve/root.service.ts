import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs';
import Swal from 'sweetalert2';
import {map} from 'rxjs/internal/operators';
import {Http} from '@angular/http';
import baseUrl from '../../api';

@Injectable({
  providedIn: 'root'
})
export class RootService implements CanActivate {
  canActivate(/*route: ActivatedRouteSnapshot, state: RouterStateSnapshot*/): Observable<boolean> | Promise<boolean> | boolean {

    if (JSON.parse(sessionStorage.getItem('user')).root > 10) {
      return true;
    } else  {
      Swal('暂无权限，请联系管理员');
      return false;
    }
  }

  constructor(private router: Router, private http: Http) { }

  /*获取所有的登录的用户*/
  public getLoginUser(par): Observable<any> {
    return this.http.get(baseUrl + 'api/rootuser', {params: {page: par}}).pipe(
      map(res => res.json())
    );
  }
  /*更改权限*/
  public changeUserRoot(par: any, root: Number): Observable<any> {
    if (par) {
      return this.http.post(baseUrl + 'api/changeroot', {params: {id: par, root: root}}).pipe(
        map(res => res.json())
      );
    }
  }
}
