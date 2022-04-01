import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { WordFilterPipe } from './pipes/word-filter.pipe';
import { FormsModule } from '@angular/forms';
import { SearchItemDetailedComponent } from './pages/search-item-detailed/search-item-detailed.component';
import { YtRoutingModule } from './yt-routing.module';
import { FilteringCriteriaComponent } from './components/filtering-criteria/filtering-criteria.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    WordFilterPipe,
    SearchItemDetailedComponent,
    FilteringCriteriaComponent,
    HeaderComponent,
  ],
  exports: [
    SearchResultsComponent,
    SearchItemComponent,
    HeaderComponent,
    FilteringCriteriaComponent,
  ],
  imports: [CommonModule, FormsModule, YtRoutingModule],
})
export class YoutubeModule {}
