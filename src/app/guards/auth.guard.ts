import { AuthService } from './../services/auth.service';
import { CanActivateFn, ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree } from '@angular/router'; 
import { ɵɵinject } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  Observable<boolean | UrlTree> 
  | Promise<boolean | UrlTree> 
  | boolean 
  | UrlTree=> {

  return ɵɵinject(AuthService).isLoggedIn()
    ? true
    : ɵɵinject(Router).createUrlTree(['/connexion']);

};