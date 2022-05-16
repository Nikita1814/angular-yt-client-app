import { AbstractControl } from '@angular/forms';

export function ValidateImgLink(control: AbstractControl) {
  const value = control.value;
  const isImg = /\.(jpeg|jpg|gif|png)$/.test(control.value);
  return !value.length
    ? { error: true, message: `Please enter a link to the image` }
    : !isImg
    ? { error: true, message: 'The image link is invalid' }
    : null;
}
