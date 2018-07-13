import {LoginComponent} from '../../login/login.component';
import {RegisterComponent} from '../../register/register.component';

export const LoginRoutes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  },
];
