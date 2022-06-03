import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit, ProduitCategorie as ProduitCategorie } from '../../produit.model';
import { ProduitHttpService } from '../../services/produit-http.service';

@Component({
  selector: 'app-produit-page',
  templateUrl: './produit-page.component.html',
  styleUrls: ['./produit-page.component.css']
})
export class ProduitPageComponent implements OnInit {

  listes: ProduitCategorie[] = []
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: ProduitHttpService
  ) { }

  ngOnInit(): void {
    this.service.produitCategorie.subscribe(data=>this.listes=data);
  }

  onDelete(id: number) {
    this.service.deleteById(id).subscribe(_=>{
      this.listes.forEach(pc=>{
        pc.produits = pc.produits.filter(produit=>produit.id !== id)
      })
    })
  }

}
