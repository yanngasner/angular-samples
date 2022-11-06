import { Routes } from '@angular/router';
import { OopComponent } from './app/oop/oop/oop.component';
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
  {
    path: 'oop',
    component: OopComponent,
  },
];
