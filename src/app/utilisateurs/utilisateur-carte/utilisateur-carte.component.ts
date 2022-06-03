import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UtilisateurModel } from '../utilisateur.model';

@Component({
  selector: 'utilisateurs-utilisateur-carte',
  templateUrl: './utilisateur-carte.component.html',
  styleUrls: ['./utilisateur-carte.component.css']
})
export class UtilisateurCarteComponent implements OnInit {

  @Input() utilisateur: UtilisateurModel = new UtilisateurModel()
  @Output() edite = new EventEmitter<UtilisateurModel>()

  constructor() { }

  ngOnInit(): void {
  }

  onEditClick(){
    this.edite.emit(this.utilisateur)
  }


}
