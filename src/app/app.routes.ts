import { RenderMode } from '@angular/ssr';
import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout/layout.component'; // Import your layout component
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./components/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'DemandeMeeting',
        loadComponent: () =>
          import('./components/meeting/meeting.component').then(
            (m) => m.MeetingComponent
          ),
      },
      {
        path: 'service-list-client',
        loadComponent: () =>
          import(
            './components/service-list-client/service-list-client.component'
          ).then((m) => m.ServiceListClientComponent),
      },
      {
        path: 'create-mecanicien',
        loadComponent: () =>
          import(
            './components/create-mecanicien/create-mecanicien.component'
          ).then((m) => m.CreateMecanicienComponent),
      },
      {
        path: 'list-appointment-manager',
        loadComponent: () =>
          import(
            './components/list-appointment-manager/list-appointment-manager.component'
          ).then((m) => m.ListAppointmentManagerComponent),
      },
      {
        path: 'create-service-appointment',
        loadComponent: () =>
          import(
            './components/create-service-appointment/create-service-appointment.component'
          ).then((m) => m.CreateServiceAppointmentComponent),
      },
      {
        path: 'create-service/:appointment_id',
        loadComponent: () =>
          import('./components/create-service/create-service.component').then(
            (m) => m.CreateServiceComponent
          ),
      },
      {
        path: 'list-service-manager',
        loadComponent: () =>
          import(
            './components/list-service-manager/list-service-manager.component'
          ).then((m) => m.ListServiceManagerComponent),
      },
    ],
  },
];
