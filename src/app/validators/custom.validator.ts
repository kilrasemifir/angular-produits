import { AbstractControl, ValidationErrors, Validator } from "@angular/forms";

export class CustomValidator implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return null
  }
}