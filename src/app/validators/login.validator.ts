import { AbstractControl } from '@angular/forms';

export function ValidateLogin(control: AbstractControl) {
  const isValidEmail = /^[A-z0-9_-^s]{3,15}@[^.]+[A-Za-z0-9]{3,}.D{2,}/.test(
    control.value
  );
  return isValidEmail ? { emailInvalid: true } : null;
}
