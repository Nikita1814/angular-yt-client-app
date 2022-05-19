import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorLoggerComponent } from './form-error-logger/form-error-logger.component';
import { InputAndErrorComponent } from './input-and-error/input-and-error.component';

@NgModule({
  declarations: [FormErrorLoggerComponent, InputAndErrorComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FormErrorLoggerComponent],
})
export class SharedModule {}
