import { HttpClient } from '@angular/common/http';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';

export function ValidateVideoLink(control: AbstractControl) {
  const value = control.value;
  const isVideo = value.includes('https://www.youtube.com/');
  return !isVideo ? { videoLinkInvalid: true } : null;
}
