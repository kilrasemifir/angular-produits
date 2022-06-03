import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './components/first/first.component';
import { InlineComponent } from './components/inline/inline.component';
import { UserComponent } from './components/user/user.component';
import { ListeItemComponent } from './components/liste-item/liste-item.component';
import { MagieComponent } from 'src/magie/magie.component';
import { UtilisateurFormulaireComponent } from './components/utilisateur-formulaire/utilisateur-formulaire.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FirstComponent,
    InlineComponent,
    UserComponent,
    ListeItemComponent,
    MagieComponent,
    UtilisateurFormulaireComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DemosModule { }
