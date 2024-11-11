import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),

    // DENTRO DEL CHILDREN SE PUEDEN DEFINIR RUTAS HIJAS /DASHBOARD/...

    children: [
      {
        title: 'Change Detection',
        path: 'change-detection',
        loadComponent: () =>
          import(
            './dashboard/Pages/change-detection/change-detection.component'
          ),
      },
      {
        title: 'Control Flow',
        path: 'control-flow',
        loadComponent: () =>
          import('./dashboard/Pages/control-flow/control-flow.component'),
      },
      {
        title: 'Defer Views',
        path: 'defer-views',
        loadComponent: () =>
          import('./dashboard/Pages/defer-views/defer-views.component'),
      },
      {
        title: 'Defer Options',
        path: 'defer-options',
        loadComponent: () =>
          import('./dashboard/Pages/defer-options/defer-options.component'),
      },
      {
        title: 'User',
        path: 'user/:id',
        loadComponent: () => import('./dashboard/Pages/user/user.component'),
      },
      {
        title: 'User List',
        path: 'user-list',
        loadComponent: () => import('./dashboard/Pages/users/users.component'),
      },
      {
        title: 'View Transition 1',
        path: 'view-transition-1',
        loadComponent: () =>
          import(
            './dashboard/Pages/view-transition/view-transition1.component'
          ),
      },
      {
        title: 'View Transition 2',
        path: 'view-transition-2',
        loadComponent: () =>
          import(
            './dashboard/Pages/view-transition/view-transition2.component'
          ),
      },

      {
        path: '',
        redirectTo: 'control-flow',
        pathMatch: 'full',
      },
    ],
  },

  // REDIRECCIONAR AL DASHBOARD
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];
