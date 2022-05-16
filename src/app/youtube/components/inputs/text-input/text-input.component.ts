import { Component, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
})
export class TextInputComponent implements OnInit {
  @Input() id: string;
  @Input() labelText: string;
  @Input() placeholder: string;
  @Input() formControlName: string;
  @Input() type: string;
  @Input() error: ValidationErrors | null | undefined;
  constructor() {}

  ngOnInit(): void {}
}
/*I wanted to make this one reusable*/
