import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './pages/log-in/log-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LogInComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
