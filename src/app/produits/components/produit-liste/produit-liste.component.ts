import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produit } from '../../produit.model';

@Component({
  selector: 'app-produit-liste',
  templateUrl: './produit-liste.component.html',
  styleUrls: ['./produit-liste.component.css']
})
export class ProduitListeComponent implements OnInit {

  @Input() produits: Produit[] = []
  @Input() titre: string = "UNKNOWN"
  @Input() size: number = 5;
  @Output() delete = new EventEmitter()

  first = 0;

  constructor() { }

  ngOnInit(): void {
  }

  get produitsListe(){
    const results = [];
    for(let i=this.first; i<this.first+this.size; i++){
      results.push(this.produits[i%this.produits.length])
    }
    return results
  }

  decalageDroite(){this.first++}
  decalageGauche(){
    if(this.first>0) this.first++
    else this.first = this.produits.length-1
  }

  onDelete(id: number) {
    this.delete.emit(id);
  }

}
