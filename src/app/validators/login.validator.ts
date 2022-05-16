import { AbstractControl } from '@angular/forms';

export function ValidateLogin(control: AbstractControl) {
  const value = control.value;
  const isValidEmail = /^[A-z0-9_-^s]{3,15}@[^.]+[A-Za-z0-9]{3,}.D{2,}/.test(
    control.value
  );
  return !value.length
    ? { error: true, message: `Please enter a login email` }
    : isValidEmail
    ? { error: true, message: `The login email is invalid` }
    : null;
}
