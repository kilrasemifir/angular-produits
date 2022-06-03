import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitPageComponent } from './pages/produit-page/produit-page.component';
import { ProduitCardComponent } from './components/produit-card/produit-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { ProduitListeComponent } from './components/produit-liste/produit-liste.component';
import { ProduitDetailPageComponent } from './pages/produit-detail-page/produit-detail-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ProduitFormulaireComponent } from './components/produit-formulaire/produit-formulaire.component';
import { ProduitEditPageComponent } from './pages/produit-edit-page/produit-edit-page.component';
import {MatSelectModule} from '@angular/material/select'
// import { MatCarouselModule } from '@ngmodule/material-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ProduitPageComponent,
    ProduitListeComponent,
    ProduitCardComponent,
    ProduitDetailPageComponent,
    ProduitFormulaireComponent,
    ProduitEditPageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
  ], 
  exports: [
    ProduitPageComponent,
    ProduitEditPageComponent,
    ProduitDetailPageComponent
  ]
})
export class ProduitsModule { }
