import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UtilisateursModule } from './utilisateurs/utilisateurs.module';
import { DemosModule } from './demos/demos.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ProduitsModule } from './produits/produits.module';
import { RedBlueDirective } from './red-blue.directive';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DemoInterceptor } from './interceptors/demo.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    RedBlueDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    UtilisateursModule,
    DemosModule,
    CoreModule,
    SharedModule,
    ProduitsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: DemoInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
