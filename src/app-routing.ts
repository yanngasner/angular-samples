import { Routes } from '@angular/router';
import { PushComponent } from './app/push/push/push.component';
import { ReferenceComponent } from './app/reference/reference/reference.component';

export const APP_ROUTES: Routes = [
  {
    path: 'push',
    component: PushComponent,
  },
  {
    path: 'reference',
    component: ReferenceComponent,
  },
];
