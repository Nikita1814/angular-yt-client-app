import { AbstractControl } from '@angular/forms';

export function ValidateVideoLink(control: AbstractControl) {
  const value = control.value;
  const isVideo = value.includes('https://www.youtube.com/');
  return !value.length
    ? { error: true, message: `Please enter a link to the video` }
    : !isVideo
    ? { error: true, message: 'The video link is invalid' }
    : null;
}
