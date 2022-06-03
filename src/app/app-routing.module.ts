import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './core/page404/page404.component';
import { FakeAuthGuard } from './guards/fake-auth.guard';
import { ProduitDetailPageComponent } from './produits/pages/produit-detail-page/produit-detail-page.component';
import { ProduitEditPageComponent } from './produits/pages/produit-edit-page/produit-edit-page.component';
import { ProduitPageComponent } from './produits/pages/produit-page/produit-page.component';
import { ProduitCategoriesResolver } from './produits/resolvers/produit-categories.resolver';
import { DemoResolver } from './resolvers/demo.resolver';
import { LayoutUtilisateurComponent } from './utilisateurs/layout-utilisateur/layout-utilisateur.component';

const routes: Routes = [
  {path:"produits", component:ProduitPageComponent},
  {path:"produits/formulaire", component:ProduitEditPageComponent, resolve: {demo: DemoResolver}},
  {path:"produits/formulaire", component:ProduitEditPageComponent, resolve: {demo: DemoResolver}},
  {path:"produits/formulaire/:id", component:ProduitEditPageComponent},
  {path:"produits/detail/:id", component:ProduitDetailPageComponent},
  {path:"produits/:categorie", component:ProduitPageComponent, resolve: {data: ProduitCategoriesResolver}},
  {path:"utilisateurs", component:LayoutUtilisateurComponent, canActivate: [FakeAuthGuard]},
  {path:"404", component:Page404Component},
  {path:"", redirectTo:"produits/films", pathMatch:"full"},
  {path:"**", redirectTo:"404"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
