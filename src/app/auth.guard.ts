import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
@Injectable()
export class AuthGuard implements CanActivate {
  logService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  constructor() { }

  canActivate(): boolean {
    if (this.logService.esAdmin()) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }

  logeadoYadmin() {
    var retorn = false;
    if (localStorage.getItem("token")) {
      if (this.logService.esAdmin()) {
        retorn = true;
      } else {
        this.router.navigate(['/home']);
        retorn = false;
      }
    }
    return retorn;
  }


  estaLogeado() {
    if (localStorage.getItem("token")) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }

} 