import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

// auth.guard.ts is to check if a route can be activated based on the user's 
// authentication status

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    /*
    RxJS Pipe and Operators
    - pipe: Used to compose multiple operators.

    - take(1): Takes the first emitted value from the observable and then completes, 
    ensuring the observable sequence ends after emitting one value.

    - map: Transforms the emitted value. Here it checks if the user is logged in.
    */
    return this.authService.isLoggedIn.pipe(
      take(1),
      map((isLoggedIn: boolean) => {
        if (!isLoggedIn) {
            //Redirects the user to the login page if they are not logged in
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      })
    );
  }
}
