import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // store the URL so we can redirect after logging in 存储URL，以便在登录后重定向， 默认路由为'/home', 该值会在authGuard守卫中动态改变
  redirectUrl: string = '/home';

  constructor (
    public router: Router
  ) {}

  getUserInfo () {
    return JSON.parse(localStorage.getItem('UINFO'));
  }

  isLogin () {
    return localStorage.getItem('STATUS') === 'IN';
  }

  logout () {
    localStorage.removeItem('STATUS');
    localStorage.removeItem('UINFO');
    this.router.navigate(['/login']);
  }

}