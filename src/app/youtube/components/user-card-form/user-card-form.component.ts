import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { UserCardInfo } from '../../models/user-card-info-model';
import { Validators, FormBuilder } from '@angular/forms';
import { ValidateImgLink } from 'src/app/validators/img-link.validator';
import { ValidateDate } from 'src/app/validators/video-date.validator';

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
        validators: [
          Validators.pattern(
            /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/
          ),
        ],
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
