import { AbstractControl } from '@angular/forms';

export function ValidateTitle(control: AbstractControl) {
  const value = control.value;
  return !value.length
    ? { error: true, message: `Please enter a title` }
    : value.length < 3
    ? { error: true, message: `The title is too short` }
    : value.length > 20
    ? { error: true, message: `The title is too long` }
    : null;
}
