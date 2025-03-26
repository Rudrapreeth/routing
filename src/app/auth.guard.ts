import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

// Example Auth Service (replace with your actual auth logic)
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    const isAuthenticated = false;  // Add your authentication check logic here
    
    if (isAuthenticated) {
      return true;  // Allow access to the route
    } else {
      this.router.navigate(['/']);  // Redirect to home or login page
      return false;  // Deny access to the route
    }
  }
}
