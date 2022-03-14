import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { WordFilterPipe } from './pipes/word-filter.pipe';
import { FormsModule } from '@angular/forms';
import { SearchItemDetailedComponent } from './pages/search-item-detailed/search-item-detailed.component';
import { YtRoutingModule } from './yt-routing.module';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    WordFilterPipe,
    SearchItemDetailedComponent,
  ],
  exports: [SearchResultsComponent, SearchItemComponent],
  imports: [CommonModule, FormsModule, YtRoutingModule],
})
export class YoutubeModule {}
