import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProduitHttpService } from '../produits/services/produit-http.service';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthGuard implements CanActivate {

  constructor(private router: Router, private produitService: ProduitHttpService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!!localStorage.getItem("user")) return true
    this.router.navigate(["/produits/formulaire"])
    return false;
  }
}
