import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UserCardInfo } from '../../models/user-card-info-model';
import {
  FormControl,
  FormGroup,
  NgForm,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ValidateImgLink } from 'src/app/validators/img-link.validator';
import { ValidateVideoLink } from 'src/app/validators/video-link.validator';
import { ValidateDate } from 'src/app/validators/video-date.validator';
import { ValidateTitle } from 'src/app/validators/title.validator';
import { ValidateDescription } from 'src/app/validators/description.validator';
import { ChangeDetectionStrategy } from '@angular/compiler';

@Component({
  selector: 'app-user-card-form',
  templateUrl: './user-card-form.component.html',
  styleUrls: ['./user-card-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardFormComponent {
  @Input() toggleFormVisibility: () => void;
  @Input() addCard: (card: UserCardInfo) => void;
  @Output() formSubmission = new EventEmitter<UserCardInfo>();
  @Output() formExit = new EventEmitter<void>();

  cardForm = this.fb.group({
    title: [
      '',
      {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
        updateOn: 'change',
      },
    ],
    description: [
      '',
      {
        validators: [Validators.maxLength(255)],
        updateOn: 'change',
      },
    ],
    img: [
      '',
      {
        validators: [ValidateImgLink],
        updateOn: 'change',
      },
    ],
    link: [
      '',
      {
        validators: [ValidateVideoLink],
        updateOn: 'change',
      },
    ],
    date: [
      '',
      {
        validators: [ValidateDate],
        updateOn: 'change',
      },
    ],
  });
  /*cardForm: FormGroup = new FormGroup({
    title: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ],
      updateOn: 'change',
    }),
    description: new FormControl('', {
      validators: [Validators.maxLength(255)],
      updateOn: 'change',
    }),
    img: new FormControl('', {
      validators: [ValidateImgLink],
      updateOn: 'change',
    }),
    link: new FormControl('', {
      validators: [ValidateVideoLink],
      updateOn: 'change',
    }),
    date: new FormControl('', {
      validators: [ValidateDate],
      updateOn: 'change',
    }),
  });*/

  constructor(private fb: FormBuilder) {}

  handleSubmit() {
    if (this.cardForm.valid) {
      this.formSubmission.emit(this.cardForm.value as UserCardInfo);
    }
  }

  exitForm() {
    this.formExit.emit();
  }
}
