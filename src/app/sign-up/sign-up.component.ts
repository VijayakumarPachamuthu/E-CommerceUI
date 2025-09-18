import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user = { username: '', email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    if (!this.user.username || !this.user.email || !this.user.password) {
      alert('All fields are required');
      return;
    }
    this.authService.signup(this.user).subscribe({
      next: (res) => {
        // ✅ use backend response
        alert(res.message || 'Signup successful');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        // ✅ show backend error message
        alert(err.error?.message || 'Signup failed');
      }
    });
  }
}
