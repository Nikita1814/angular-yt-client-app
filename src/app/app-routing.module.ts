import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './auth/pages/log-in/log-in.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { SearchResultsComponent } from './youtube/pages/search-results/search-results.component';

const routes: Routes = [
  {path:'auth', loadChildren:() =>import('./auth/auth.module').then(m =>m.AuthModule)},
  {path:'youtube', loadChildren:() =>import('./youtube/youtube.module').then(m => m.YoutubeModule)},
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
