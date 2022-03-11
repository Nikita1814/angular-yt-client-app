import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchItemComponent } from './search-results/search-item/search-item.component';
import { FilteringCriteriaComponent } from './filtering-criteria/filtering-criteria.component';
import { WordFilterPipe } from './pipes/word-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    SearchItemComponent,
    FilteringCriteriaComponent,
    WordFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
    providers: [WordFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
