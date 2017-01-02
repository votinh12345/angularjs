import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { loginRoutes }    from './login/login.routes';
import { planRoutes }    from './plan/plan.routes';

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  ...loginRoutes,
  ...planRoutes
  
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
