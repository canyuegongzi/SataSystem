import {UserindexComponent} from '../../user/userindex/userindex.component';
import {ReeorduserComponent} from '../../user/reeorduser/reeorduser.component';
import {EdituserComponent} from '../../user/edituser/edituser.component';
import {HomeComponent} from '../../home/home.component';
import {RepassComponent} from '../../user/repass/repass.component';
import {UsermessageComponent} from '../../user/usermessage/usermessage.component';

export const UserRoutes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component:  UserindexComponent,
      },
      {
        path: 'reword',
        component: ReeorduserComponent,
      },
      {
        path: 'repass',
        component: RepassComponent,
      },
      {
        path: 'edit',
        component: EdituserComponent,
      },
      {
        path: 'info',
        component: UsermessageComponent,
      }
    ]
  },
];
