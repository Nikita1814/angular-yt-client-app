import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';

export function ValidateVideoLink(control: AbstractControl) {
  const value = control.value;
  const isVideo = value.includes('https://www.youtube.com/');
  return !isVideo ? { videoLinkInvalid: true } : null;
}
