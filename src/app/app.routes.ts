import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutComponent } from './components/layout/layout/layout.component'; // Import your layout component
import { MeetingComponent } from './components/meeting/meeting.component';
import { ServiceListClientComponent } from './components/service-list-client/service-list-client.component';
import { CreateMecanicienComponent } from './components/create-mecanicien/create-mecanicien.component';
import { ListAppointmentManagerComponent } from './components/list-appointment-manager/list-appointment-manager.component';
import { CreateServiceAppointmentComponent } from './components/create-service-appointment/create-service-appointment.component';
import { CreateServiceComponent } from './components/create-service/create-service.component';
import { ListServiceManagerComponent } from './components/list-service-manager/list-service-manager.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Default route
  {
    path: '',
    component: LayoutComponent, // Applies layout to all child routes
    canActivate: [AuthGuard], // Applies layout to all child routes
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'DemandeMeeting', component: MeetingComponent },
      { path: 'service-list-client', component: ServiceListClientComponent },
      { path: 'create-mecanicien', component: CreateMecanicienComponent },
      {
        path: 'list-appointment-manager',
        component: ListAppointmentManagerComponent,
      },
      {
        path: 'create-service-appointment',
        component: CreateServiceAppointmentComponent,
      },
      {
        path: 'create-service/:appointment_id',
        component: CreateServiceComponent, // Pass a custom value
      },
      {
        path: 'list-service-manager',
        component: ListServiceManagerComponent, // Pass a custom value
      },
    ],
  },
];
