import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AuthService } from '../../services/auth.service'; // Import AuthService

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], // Add HttpClientModule here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // TODO  : Changer les values
  mail: string = 'user@gmail.com';
  mdp: string = '1234';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {} // Inject AuthService and Router

  ngOnInit(): void {
    // Vérifie si on est dans le navigateur avant d'accéder à localStorage
    if (
      typeof window !== 'undefined' &&
      window.localStorage &&
      localStorage.getItem('user')
    ) {
      const user = this.authService.getUser();
      if (user) {
        // Redirige vers le dashboard si l'utilisateur existe
        this.router.navigate(['/dashboard']);
      }
    }
  }

  login() {
    this.authService.login(this.mail, this.mdp).subscribe({
      next: (response) => {
        // Navigate to the dashboard on successful login
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        // Handle login errors
        if (error.status === 404) {
          this.errorMessage = 'User not found!';
        } else if (error.status === 401) {
          this.errorMessage = 'Incorrect password!';
        } else {
          this.errorMessage = `An error occurred: ${error.message}`;
        }
      },
    });
  }
}
