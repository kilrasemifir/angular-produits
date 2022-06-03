import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UtilisateurModel } from '../utilisateur.model';

@Component({
  selector: 'utilisateurs-utilisateur-liste',
  templateUrl: './utilisateur-liste.component.html',
  styleUrls: ['./utilisateur-liste.component.css']
})
export class UtilisateurListeComponent implements OnInit {

  @Input() utilisateurs: UtilisateurModel[] = []
  @Output() edit = new EventEmitter<UtilisateurModel>()
  constructor() { }

  ngOnInit(): void {
  }

  onEdit(utilisateur: UtilisateurModel) {
    this.edit.emit(utilisateur)
  }

}
