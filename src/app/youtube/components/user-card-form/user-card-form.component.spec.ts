import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardFormComponent } from './user-card-form.component';

describe('UserCardFormComponent', () => {
  let component: UserCardFormComponent;
  let fixture: ComponentFixture<UserCardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserCardFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
