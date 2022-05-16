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
import { UserCardsComponent } from './pages/user-cards/user-cards.component';
import { UserCardFormComponent } from './components/user-card-form/user-card-form.component';
import { UserCardComponent } from './components/user-card/user-card.component';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    WordFilterPipe,
    SearchItemDetailedComponent,
    FilteringCriteriaComponent,
    HeaderComponent,
    UserCardsComponent,
    UserCardFormComponent,
    UserCardComponent,
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
