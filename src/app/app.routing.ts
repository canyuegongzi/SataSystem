export const appRoutes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './module/login/login.module#LoginModule',
  },
  {
    path: 'home',
    loadChildren: './module/home/home.module#HomeModule'
  },
  {
    path: 'tools',
    loadChildren: './module/tools/tools.module#ToolsModule'
  }
];

// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
