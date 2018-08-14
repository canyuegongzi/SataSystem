import {EditComponent} from '../../admin/edit/edit.component';
import {AddadminComponent} from '../../admin/addadmin/addadmin.component';
import {RegadminComponent} from '../../admin/regadmin/regadmin.component';
import {AdminDetailComponent} from '../../admin/admin-detail/admin-detail.component';
import {AdminComponent} from '../../admin/admin.component';
import {DeladminComponent} from '../../admin/deladmin/deladmin.component';
import {HomeComponent} from '../../home/home.component';
import {ShowadminComponent} from '../../admin/showadmin/showadmin.component';
import {EditunsaveService} from '../../serve/editunsave.service';
import {NavrootService} from '../../serve/navroot.service';

export const AdminRoutes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ShowadminComponent,
      },
      {
        path: 'show',
        component : ShowadminComponent
      },
      {
        path: 'detail',
        component: AdminDetailComponent
      },
      {
        path: 'edit',
        component: EditComponent,
        canDeactivate: [EditunsaveService]
      },
      {
        path: 'add',
        component: AddadminComponent,
      },
      {
        path: 'del',
        component: DeladminComponent
      },
      {
        path: 'reg',
        component: RegadminComponent,
        canActivate: [NavrootService]
      }
    ]
  }
];
