import { AbstractControl } from '@angular/forms';

export function ValidateDescription(control: AbstractControl) {
  const value = control.value;
  return value.length > 255
    ? { error: true, message: `The description is too long` }
    : null;
}
