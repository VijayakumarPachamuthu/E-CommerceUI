import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  credentials = { username: '', password: '' };

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    // ✅ Prevent empty fields
    if (!this.credentials.username || !this.credentials.password) {
      alert('Username and Password are required!');
      return;
    }

    this.authService.login(this.credentials).subscribe({
      next: (res: any) => {
        this.authService.setToken(res.token);
        alert('Login successful');
        this.router.navigate(['/get']);
      },
      error: (err) => alert(err.error?.message || 'Login failed')
    });
  }
}
