import {
  Component,
  ViewEncapsulation,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { AuthService } from '../../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateLogin } from 'src/app/validators/login.validator';
import { ValidatePassword } from 'src/app/validators/password.validator';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogInComponent implements OnInit {
  mail!: string;
  password!: string;
  logInForm: FormGroup;
  constructor(public authService: AuthService) {}
  ngOnInit(): void {
    this.mail = '';
    this.password = '';
    this.logInForm = new FormGroup({
      mail: new FormControl('', {
        validators: [Validators.required, Validators.email],
        updateOn: 'change',
      }),
      password: new FormControl('', {
        validators: [Validators.pattern(/[A-Za-z0-9!@#?]/), Validators.required],
        updateOn: 'change',
      }),
    });
  }

  handleSignIn() {
    if (this.logInForm.valid) {
      this.authService.signIn(
        this.logInForm.value.mail,
        this.logInForm.value.password
      );
    }
  }
}
