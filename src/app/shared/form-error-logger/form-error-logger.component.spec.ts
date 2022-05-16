import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormErrorLoggerComponent } from './form-error-logger.component';

describe('FormErrorLoggerComponent', () => {
  let component: FormErrorLoggerComponent;
  let fixture: ComponentFixture<FormErrorLoggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormErrorLoggerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormErrorLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
