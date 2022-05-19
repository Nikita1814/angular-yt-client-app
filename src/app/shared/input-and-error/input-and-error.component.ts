import { Component, Input, OnInit, ViewChild, } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, FormControlDirective, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-input-and-error',
  templateUrl: './input-and-error.component.html',
  styleUrls: ['./input-and-error.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputAndErrorComponent,
      multi: true
    }
  ]
})
export class InputAndErrorComponent implements ControlValueAccessor{

  @Input() type: string
  @Input() title : string
  @Input() errorsObj: ValidationErrors | null
  @Input() errorMsgs: {[kind:string] : string}
  @Input() id:string
  @Input() formControl: FormControl
  @Input() controlName: string
  @ViewChild(FormControlDirective, {static: true})
      formControlDirective: FormControlDirective;

  private value: string
  constructor(private controlContainer: ControlContainer) { }

  get c() {
    return this.formControl || this.controlContainer!.control!.get(this.controlName);
  }




  registerOnTouched(fn: unknown): void {
    this.formControlDirective!.valueAccessor!.registerOnTouched(fn);
  }

  registerOnChange(fn: unknown): void {
    this.formControlDirective!.valueAccessor!.registerOnChange(fn);
  }

  writeValue(obj: unknown): void {
    this.formControlDirective!.valueAccessor!.writeValue(obj);
  }

}
