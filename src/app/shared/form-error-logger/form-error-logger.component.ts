import { Component, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-error-logger',
  templateUrl: './form-error-logger.component.html',
  styleUrls: ['./form-error-logger.component.css'],
})
export class FormErrorLoggerComponent implements OnInit {
  @Input() error:ValidationErrors | undefined | null;
  constructor() {}

  ngOnInit(): void {}
}
