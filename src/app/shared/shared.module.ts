import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplacePipe } from './pipes/replace.pipe';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { TraductionPipe } from './pipes/traduction.pipe';
import { AlertButtonComponent } from './alert-button/alert-button.component';



@NgModule({
  declarations: [
    ReplacePipe,
    CustomDatePipe,
    TraductionPipe,
    AlertButtonComponent,],
  imports: [
    CommonModule
  ], exports: [
    ReplacePipe
  ]
})
export class SharedModule { }
