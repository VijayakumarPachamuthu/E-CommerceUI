import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private baseUrl = 'http://localhost:8094/api/auth';

  constructor(private http: HttpClient) { }

  signup(user: { username: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, user);
  }

  // http://localhost:8094/api/auth/signup
  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }
}
