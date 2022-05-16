import { Component, Input, OnInit } from '@angular/core';
import { UserCardInfo } from '../../models/user-card-info-model';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-user-card-form',
  templateUrl: './user-card-form.component.html',
  styleUrls: ['./user-card-form.component.css'],
})
export class UserCardFormComponent implements OnInit {
  @Input() userCards: UserCardInfo[];
  @Input() toggleFormVisibility: () => void;
  @Input() addCard: (card: UserCardInfo) => void;

  cardform = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    img: new FormControl(''),
    link: new FormControl(''),
    date: new FormControl(''),
  });
  constructor() {}

  ngOnInit(): void {}
}
