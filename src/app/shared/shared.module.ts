import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorLoggerComponent } from './form-error-logger/form-error-logger.component';

@NgModule({
  declarations: [FormErrorLoggerComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FormErrorLoggerComponent],
})
export class SharedModule {}
