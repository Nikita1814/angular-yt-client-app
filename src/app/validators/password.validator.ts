import { AbstractControl } from '@angular/forms';

export function ValidateLogin(control: AbstractControl) {
  const value = control.value;
  if (!value) {
    return null;
  }
  const hasUpperCase = /[A-Z]+/.test(value);
  const hasLowerCase = /[a-z]+/.test(value);
  const hasNumeric = /[0-9]+/.test(value);
  const hasSpecial = /[!@#?]/.test(value);
  const longEnough = value.length > 7;
  const passwordValid =
    hasUpperCase && hasLowerCase && hasNumeric && hasSpecial && longEnough;
  return !passwordValid ? { passwordStrength: true } : null;
}
