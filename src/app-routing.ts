import { Routes } from '@angular/router';
import { ObjectComponent } from './app/object/object/object.component';
import { PushComponent } from './app/push/push/push.component';

export const APP_ROUTES: Routes = [
  {
    path: 'push',
    component: PushComponent,
  },
  {
    path: 'object',
    component: ObjectComponent,
  },
];
