import { AbstractControl } from '@angular/forms';

export function ValidateDate(control: AbstractControl) {
  const today = Date.now();
  const isValidDate = new Date(control.value).getTime() > today;
  return isValidDate ? { dateInvalid: true } : null;
}
