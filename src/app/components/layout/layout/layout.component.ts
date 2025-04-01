import { Component, NgModule } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TopbarComponent } from '../topbar/topbar.component';
import { RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-layout',
  imports: [SidebarComponent, TopbarComponent,RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
