import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produit } from '../../produit.model';
import { ProduitHttpService } from '../../services/produit-http.service';

@Component({
  selector: 'app-produit-card',
  templateUrl: './produit-card.component.html',
  styleUrls: ['./produit-card.component.css']
})
export class ProduitCardComponent implements OnInit {

  @Input() produit: Produit = new Produit();
  @Output() delete = new EventEmitter()

  descIsShow = false;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  get titre() {return this.produit.titre}
  get imgURL() {return this.produit.imgUrl}
  get description() {return this.produit.description}

  onMouseEnter(){this.descIsShow=true}
  onMouseLeave(){this.descIsShow=false}

  onDelete(){
    this.delete.emit(this.produit.id)
  }

}
