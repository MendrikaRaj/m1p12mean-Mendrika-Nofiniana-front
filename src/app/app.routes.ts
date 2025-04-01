import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutComponent } from './components/layout/layout/layout.component'; // Import your layout component

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // Default route
    {
        path: '',
        component: LayoutComponent, // Applies layout to all child routes
        children: [
            { path: 'dashboard', component: DashboardComponent },
            // Add other routes that should use the layout here
            // Example:
            // { path: 'products', component: ProductsComponent },
            // { path: 'users', component: UsersComponent },
        ]
    },

];
