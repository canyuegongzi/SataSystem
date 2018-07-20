import {CanDeactivate} from '@angular/router';
import {EditComponent} from '../admin/edit/edit.component';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

export interface EditComponent {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
@Injectable()
export class UnsavedGuard implements CanDeactivate<EditComponent> {
  canDeactivate(component: EditComponent) {}
}
