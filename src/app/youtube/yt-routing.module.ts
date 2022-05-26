import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchItemDetailedComponent } from './pages/search-item-detailed/search-item-detailed.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { UserCardsComponent } from './pages/user-cards/user-cards.component';

const routes: Routes = [
  { path: '', component: SearchResultsComponent },
  { path: 'vid/:id', component: SearchItemDetailedComponent },
  { path: 'user-forms', component: UserCardsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YtRoutingModule {}
