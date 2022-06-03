import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produit, ProduitCategorie } from '../produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitHttpService {

  produits: Observable<Produit[]> = of([])
  produitCategorie: Observable<ProduitCategorie[]> = of([])

  constructor(private http: HttpClient) { }

  findAll(): Observable<Produit[]> {
    return this.http.get<Produit[]>(environment.apiBaseUrl+"/produits")
  }

  findAllCategorie(categorie: string = ""): void {
    const obsProduit = this.findAll();
    if (categorie) {
      this.produitCategorie = obsProduit.pipe(
        map(produits => produits.filter(produit => produit.categorie.toLowerCase() === categorie.toLowerCase())), 
        map(produits=>[{titre:categorie, produits}]))
    }else {
      this.produitCategorie = this.transformToProcuitCategorie(obsProduit);
    }
  }

  insert(produit: Produit){
    return this.http.post(environment.apiBaseUrl+"/produits", produit)
  }

  update(produit: Produit) {
    return this.http.put(environment.apiBaseUrl+"/produits/"+produit.id, produit)
  }

  findById(id: number|string): Observable<Produit>{
    return this.http.get<Produit>(environment.apiBaseUrl+"/produits/"+id);
  }

  deleteById(id: number|string) {
    return this.http.delete(environment.apiBaseUrl+"/produits/"+id);
  }

  private transformToProcuitCategorie(obsProduit: Observable<Produit[]>): Observable<ProduitCategorie[]> {
    return obsProduit.pipe(
      map(produits => {
        const result: ProduitCategorie[] = [];
        produits
          .map(produit => {
            return { titre: produit.categorie, produits: [produit] };
          })
          .forEach(pc => this.produitToProduitCategorie(result, pc));
        return result;
      })
    );
  }

  private produitToProduitCategorie(result: ProduitCategorie[], pc: { titre: string; produits: Produit[]; }) {
    const pcr = result.find(c => c.titre === pc.titre);
    if (pcr) {
      pcr.produits = [...pc.produits, ...pcr.produits];
    } else {
      result.push(pc);
    }
  }
}
