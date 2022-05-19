import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormErrorLoggerComponent } from './form-error-logger/form-error-logger.component';
import { InputAndErrorComponent } from './input-and-error/input-and-error.component';

@NgModule({
  declarations: [FormErrorLoggerComponent, InputAndErrorComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [FormErrorLoggerComponent, InputAndErrorComponent],
})
export class SharedModule {}
