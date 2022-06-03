import { Component, OnInit } from '@angular/core';
import { UtilisateurModel } from '../utilisateur.model';

@Component({
  selector: 'utilisateurs-layout-utilisateur',
  templateUrl: './layout-utilisateur.component.html',
  styleUrls: ['./layout-utilisateur.component.css']
})
export class LayoutUtilisateurComponent implements OnInit {

  utilisateurs: UtilisateurModel[] = [
    new UtilisateurModel()
  ]

  utilisateurEdit = new UtilisateurModel();

  constructor() { }

  onFormFinish(nouvelUtilisateur: UtilisateurModel){
    this.utilisateurs.push(nouvelUtilisateur)
  }

  onEdit(utilisateur: UtilisateurModel) {
    this.utilisateurEdit = utilisateur;
  }

  ngOnInit(): void {
  }

}
