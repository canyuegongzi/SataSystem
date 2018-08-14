import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';
import {Observable} from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NavrootService implements CanActivate {
  canActivate(/*route: ActivatedRouteSnapshot, state: RouterStateSnapshot*/): Observable<boolean> | Promise<boolean> | boolean {
    const root = JSON.parse(sessionStorage.getItem('user')).root;
    if (JSON.parse(sessionStorage.getItem('user')).root < 2) {
      Swal('暂无权限，请联系管理员');
      return false;
    } else  {
      return true;
    }
  }
  constructor() { }
}
