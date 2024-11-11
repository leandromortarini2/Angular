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
        title: 'View Transition',
        path: 'view-transition',
        loadComponent: () =>
          import('./dashboard/Pages/view-transition/view-transition.component'),
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
