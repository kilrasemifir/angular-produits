import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../../produit.model';

@Component({
  selector: 'app-produit-detail-page',
  templateUrl: './produit-detail-page.component.html',
  styleUrls: ['./produit-detail-page.component.css']
})
export class ProduitDetailPageComponent implements OnInit {

  produit: Produit = new Produit();

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.produit.id = Number.parseInt(this.route.snapshot.paramMap.get("id") || '-1') ;

  }

}
