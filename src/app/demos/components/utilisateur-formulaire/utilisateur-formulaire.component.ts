import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-utilisateur-formulaire',
  templateUrl: './utilisateur-formulaire.component.html',
  styleUrls: ['./utilisateur-formulaire.component.css']
})
export class UtilisateurFormulaireComponent implements OnInit {

  utilisateur: FormGroup;
  constructor() { 
    this.utilisateur = new FormGroup({
      nom: new FormControl('', [Validators.required, Validators.minLength(8)]),
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.utilisateur.invalid){
      console.log(this.utilisateur.get('nom')?.errors)
      alert("Formulaire invalide")
    }
    else 
      alert(JSON.stringify(this.utilisateur.value))
  }

}
