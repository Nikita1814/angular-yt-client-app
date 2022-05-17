import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UserCardInfo } from '../../models/user-card-info-model';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ValidateImgLink } from 'src/app/validators/img-link.validator';
import { ValidateVideoLink } from 'src/app/validators/video-link.validator';
import { ValidateDate } from 'src/app/validators/video-date.validator';
import { ValidateTitle } from 'src/app/validators/title.validator';
import { ValidateDescription } from 'src/app/validators/description.validator';
import { Store } from '@ngrx/store';
import { addUserCard } from '../../redux/actions/user-card-creation.action';
import { PageState } from '../../redux/state.model';

@Component({
  selector: 'app-user-card-form',
  templateUrl: './user-card-form.component.html',
  styleUrls: ['./user-card-form.component.css'],
})
export class UserCardFormComponent implements OnInit {
  @Input() toggleFormVisibility: () => void;
  @Input() addCard: (card: UserCardInfo) => void;
  @Output() formSubmission = new EventEmitter<UserCardInfo>();
  @Output() formExit = new EventEmitter();
  cardForm: FormGroup;

  constructor( private store: Store<PageState>) {}

  handleSubmit() {
    /*if (this.cardForm.valid) {
      this.formSubmission.emit(this.cardForm.value as UserCardInfo);
    }*/

    if (this.cardForm.valid) {
      this.store.dispatch(addUserCard({userCard: this.cardForm.value as UserCardInfo }));
    }
  }

  exitForm() {
    this.formExit.emit();
  }
  ngOnInit(): void {
    this.cardForm = new FormGroup({
      title: new FormControl('', {
        validators: [ValidateTitle],
        updateOn: 'change',
      }),
      description: new FormControl('', {
        validators: [ValidateDescription],
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
    });
  }
}
