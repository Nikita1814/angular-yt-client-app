import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
})
export class TextInputComponent {
  @Input() id: string;
  @Input() labelText: string;
  @Input() placeholder: string;
  @Input() formControlName: string;
  @Input() type: string;
  @Input() error: ValidationErrors | null | undefined;
  constructor() {}
}
/*I wanted to make this one reusable*/
