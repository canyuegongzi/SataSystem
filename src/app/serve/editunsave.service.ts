import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {EditComponent} from '../admin/edit/edit.component';
import {Observable} from 'rxjs';
import Swal from 'sweetalert2';


export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
@Injectable({
  providedIn: 'root'
})
export class EditunsaveService implements CanDeactivate<EditComponent> {

  canDeactivate(component: EditComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(route);
    console.log(state);
    return window.confirm('你还没有保存，确定要离开吗？');
  }
}
