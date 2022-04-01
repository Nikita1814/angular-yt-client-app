import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, FormsModule],
  exports: [],
})
export class CoreModule {}
