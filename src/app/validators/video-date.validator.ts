import { AbstractControl } from '@angular/forms';

export function ValidateDate(control: AbstractControl) {
  const value = control.value;
  const today = Date.now();
  const isValidDate = new Date(value).getTime() > today;
  /*return !value.length
    ? { error: true, message: `Please enter a creation date` }
    : isValidDate
    ? { error: true, message: `The date is invalid` }
    : null;*/
  return !isValidDate ? { dateInvalid: true } : null;
}
