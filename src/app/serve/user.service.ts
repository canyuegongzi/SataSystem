import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {Http} from '@angular/http';
import {map} from 'rxjs/internal/operators';
import {EditPass, LoginUser} from '../module/Adminuer';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router, private http: Http) { }
  public getcurrentUser(id: any, name: string): Observable<any> {
    if (id && name) {
      return this.http.get('api/user', {params: {id: id, name: name}}).pipe(
        map(res => res.json())
      );
    } else {
      return ;
    }
  }
  /*修改信息*/
  public editUserDetail(par: LoginUser): Observable<any> {
    if (par) {
      return this.http.post('api/edituser', {params:  par}).pipe(
        map(res => res.json())
      );
    }
  }
  /*修改密码*/
  public editUserPass(par: EditPass): Observable<any> {
    if (!par.newpass && !par.oldpass) {
      Swal('未知错误', '请进行其他操作', 'error');
      return;
    } else {
     return this.http.post('api/editpass', {params: par}).pipe(
        map(res => res.json()
        )
      );
    }
  }
}
