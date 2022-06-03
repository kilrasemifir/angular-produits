import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produit } from '../../produit.model';

@Component({
  selector: 'app-produit-formulaire',
  templateUrl: './produit-formulaire.component.html',
  styleUrls: ['./produit-formulaire.component.css']
})
export class ProduitFormulaireComponent implements OnInit, OnChanges, OnDestroy {

  @Input() produit: Produit = new Produit();
  @Output() finish = new EventEmitter();

  interval = setInterval(()=>console.log("Hello"), 1000)

  form: FormGroup=new FormGroup({});
  categories = [
    "films", "series", "mini-serie"
  ]

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["produit"]) 
      this.form = this.formBuilder.group({
        id: [this.produit.id],
        titre: [this.produit.titre, [Validators.required, Validators.minLength(2)]],
        imgUrl: [this.produit.imgUrl, [Validators.required, Validators.minLength(2)]],
        description: [this.produit.description],
        dateSortie: [(this.produit.dateSortie? new Date(this.produit.dateSortie) : new Date()).toISOString().slice(0, 10)],
        realisateur: [this.produit.realisateur, [Validators.required, Validators.minLength(2)]],
        categorie: [this.produit.categorie, [Validators.required, Validators.minLength(2)]]
      })
  }

  ngOnDestroy(): void {
      clearInterval(this.interval)
  }

  onSubmit(){ 
    if(this.form.valid) {
      const result = this.form.value
      this.finish.emit(result)
    }
  }

}
