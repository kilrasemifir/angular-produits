import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { MatButton, MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    HeaderComponent,
    Page404Component
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule
  ], 
  exports: [
    HeaderComponent,
    Page404Component
  ]
})
export class CoreModule { }
