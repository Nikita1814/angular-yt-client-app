import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { UserCardInfo } from '../../models/user-card-info-model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent {
  @Input() userVid: UserCardInfo;
}
