import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {} // ✅ Inject Router

  login() {
    if (this.username === '1234' && this.password === '1234') {
      this.router.navigate(['/dashboard']); // ✅ Redirect to dashboard
    } else {
      this.errorMessage = 'Invalid credentials!';
    }
  }
}
