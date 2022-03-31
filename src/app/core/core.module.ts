import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    HomePageComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [],
})
export class CoreModule {}
