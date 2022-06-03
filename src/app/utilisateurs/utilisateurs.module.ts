import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulaireUtilisateurComponent } from './formulaire-utilisateur/formulaire-utilisateur.component';
import { LayoutUtilisateurComponent } from './layout-utilisateur/layout-utilisateur.component';
import { UtilisateurCarteComponent } from './utilisateur-carte/utilisateur-carte.component';
import { UtilisateurListeComponent } from './utilisateur-liste/utilisateur-liste.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AppModule } from '../app.module';



@NgModule({
  declarations: [
    FormulaireUtilisateurComponent,
    LayoutUtilisateurComponent,
    UtilisateurCarteComponent,
    UtilisateurListeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
  ],
  exports: [
    LayoutUtilisateurComponent
  ]
})
export class UtilisateursModule { }
