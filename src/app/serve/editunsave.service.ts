import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {EditComponent} from '../admin/edit/edit.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditunsaveService implements CanDeactivate<EditComponent> {

  canDeactivate(component: EditComponent, currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // console.log(1111);
    console.log(currentState);
    console.log(nextState);

    // 判断并返回
    return EditComponent.canDeactivate ? EditComponent.canDeactivate() : true;
  }

  constructor() { }
}
