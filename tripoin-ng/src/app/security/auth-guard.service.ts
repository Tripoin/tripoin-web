import { Injectable } from "@angular/core";
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";

@Injectable()
export class AuthGuardService implements CanActivate {
    
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return false;
  }  

}