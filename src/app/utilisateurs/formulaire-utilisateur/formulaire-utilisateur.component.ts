import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilisateurModel } from '../utilisateur.model';

@Component({
  selector: 'utilisateurs-formulaire-utilisateur',
  templateUrl: './formulaire-utilisateur.component.html',
  styleUrls: ['./formulaire-utilisateur.component.css']
})
export class FormulaireUtilisateurComponent implements OnInit {

  utilisateurForm: FormGroup = new FormGroup({})
  errorMessages: string[] = []
  @Input() utilisateur = new UtilisateurModel();
  @Output() finish = new EventEmitter<UtilisateurModel>()

  constructor(private formBuilder: FormBuilder) {
    this.utilisateurForm = this.formBuilder.group({
      nom: [this.utilisateur.nom, [Validators.required, Validators.minLength(2)]],
      prenom: [this.utilisateur.prenom, [Validators.required, Validators.minLength(2)]],
      email: [this.utilisateur.email, [Validators.required, Validators.email]],
      entreprise: [this.utilisateur.entreprise, [Validators.required, Validators.minLength(2)]],
      telephones: this.formBuilder.array([])
    })
    this.utilisateur.telephones.forEach(this.ajouterTelephone)
  }

  get telephones(): FormArray {
    return this.utilisateurForm.get("telephones") as FormArray
  }

  ajouterTelephone(telephone: string = ''){
    this.telephones.push(this.formBuilder.control(telephone, [Validators.minLength(10)]))
  }

  supprimerTelephone(index: number) {
    this.telephones.removeAt(index)
  }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.errorMessages = []
    if (this.utilisateurForm.valid){
      this.finish.emit(this.utilisateurForm.value)
      this.utilisateurForm.reset()
    }
    else {
      this.verificationMessageErreurs("nom");
      this.verificationMessageErreurs("prenom");
      this.verificationMessageErreurs("email");
      this.verificationMessageErreurs("entreprise");
      this.verificationMessageErreurs("telephones");
    }
  }


  private verificationMessageErreurs(controlName: string) {
    if (this.utilisateurForm.get(controlName)?.errors) {
      this.errorMessages.push(`Le champs ${controlName} n'est pas valide`);
    }
  }
}
