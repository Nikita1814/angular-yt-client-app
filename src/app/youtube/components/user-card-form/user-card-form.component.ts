import { Component, Input, OnInit } from '@angular/core';
import { UserCardInfo } from '../../models/user-card-info-model';

@Component({
  selector: 'app-user-card-form',
  templateUrl: './user-card-form.component.html',
  styleUrls: ['./user-card-form.component.css'],
})
export class UserCardFormComponent implements OnInit {
  @Input() userCards: UserCardInfo[];
  @Input() toggleFormVisibility: () => void;
  constructor() {}

  ngOnInit(): void {}
}
