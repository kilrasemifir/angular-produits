import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Produit } from '../../produit.model';
import { ProduitHttpService } from '../../services/produit-http.service';

@Component({
  selector: 'app-produit-edit-page',
  templateUrl: './produit-edit-page.component.html',
  styleUrls: ['./produit-edit-page.component.css']
})
export class ProduitEditPageComponent implements OnInit {

  produit: Produit = new Produit();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: ProduitHttpService
  ) { }

  ngOnInit(): void {
    console.log("PAGE INIT")
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    if (id){
      this.service.findById(id).subscribe(produit=>this.produit=produit);
    }
  }

  onFinish(produit: Produit){
    let obs: Observable<any>;
    if (!produit.id || produit.id ==-1 ) obs = this.service.insert(produit);
    else obs = this.service.update(produit);
    obs.subscribe( _=>{
      this.router.navigate(['produits'])
    });
  }

}
