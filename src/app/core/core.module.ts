import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FilteringCriteriaComponent } from './components/filtering-criteria/filtering-criteria.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent,
    FilteringCriteriaComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [HeaderComponent, FilteringCriteriaComponent],
})
export class CoreModule {}
