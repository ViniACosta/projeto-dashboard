import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private token: string | null = null;

  login(username: string, password: string): boolean {
    if (username === 'secretaria' && password === '12345') {
      this.token = 'admin-token';
      return true;
    }
    
    return false;
  }

  logout(): void {
    this.token = null;
  }

  isAuthenticated(): boolean {
    return this.token !== null;
  }

  getToken(): string | null {
    return this.token;
  }
}