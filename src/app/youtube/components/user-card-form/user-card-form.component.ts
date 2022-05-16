import { Component, Input, OnInit } from '@angular/core';
import { UserCardInfo } from '../../models/user-card-info-model';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ValidateImgLink } from 'src/app/validators/img-link.validator';
import { ValidateVideoLink } from 'src/app/validators/video-link.validator';
import { ValidateDate } from 'src/app/validators/video-date.validator';
import { ValidateTitle } from 'src/app/validators/title.validator';
import { ValidateDescription } from 'src/app/validators/description.validator';
@Component({
  selector: 'app-user-card-form',
  templateUrl: './user-card-form.component.html',
  styleUrls: ['./user-card-form.component.css'],
})
export class UserCardFormComponent implements OnInit {
  @Input() userCards: UserCardInfo[];
  @Input() toggleFormVisibility: () => void;
  @Input() addCard: (card: UserCardInfo) => void;

  cardForm = new FormGroup({
    title: new FormControl('', {
      validators: [ValidateTitle],
      updateOn: 'blur',
    }),
    description: new FormControl('', {
      validators: [ValidateDescription],
      updateOn: 'blur',
    }),
    img: new FormControl('', {
      validators: [ValidateImgLink],
      updateOn: 'blur',
    }),
    link: new FormControl('', {
      validators: [ValidateVideoLink],
      updateOn: 'blur',
    }),
    date: new FormControl('', { validators: [ValidateDate], updateOn: 'blur' }),
  });
  constructor() {}
  handleSubmit() {
    this.addCard(this.cardForm.value as UserCardInfo);
  }
  ngOnInit(): void {}
}
