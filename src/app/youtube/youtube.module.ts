import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { FilteringCriteriaComponent } from '../core/components/filtering-criteria/filtering-criteria.component';
import { WordFilterPipe } from './pipes/word-filter.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    FilteringCriteriaComponent,
    WordFilterPipe
  ],
  exports:[
    SearchResultsComponent,
    SearchItemComponent,
    FilteringCriteriaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class YoutubeModule { }
