import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service'; // Import AuthService

@Component({
  selector: 'app-topbar',
  imports: [],
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  userName: string = ''; // Property to store the user's name

  constructor(private authService: AuthService, private router: Router) { } // Inject AuthService and Router

  ngOnInit(): void {
    const user = this.authService.getUser(); // Retrieve the user from AuthService
    if (user) {
      this.userName = user.nom + " " + user.prenom || 'Utilisateur'; // Set the user's name or a default value
    }
  }

  logout(): void {
    this.authService.logout(); // Call the logout method from AuthService
    this.router.navigate(['/login']); // Redirect to the login page
  }
}
