import { AbstractControl } from '@angular/forms';

export function ValidatePassword(control: AbstractControl) {
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
  return !value.length
    ? { error: true, message: `Please enter a password` }
    : !passwordValid
    ? {
        error: true,
        message: `Your password isn't strong enough,the passsword must contain at least 8 characters including: uppercase, lowercase, letters, numbers, special characters (! @ # ? )`,
      }
    : null;
}
