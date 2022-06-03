import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProduitHttpService } from '../services/produit-http.service';

@Injectable({
  providedIn: 'root'
})
export class ProduitCategoriesResolver implements Resolve<boolean> {

  constructor(private service: ProduitHttpService){}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    
    const categorie = route.paramMap.get('categorie')
    this.service.findAllCategorie(categorie || '')
    return of(true);
  }
}
