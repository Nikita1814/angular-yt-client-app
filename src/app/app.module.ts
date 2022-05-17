import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordFilterPipe } from './youtube/pipes/word-filter.pipe';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { ytVideosReducer } from './youtube/redux/reducers/ytVideos.reducer';
import { userCardsReducer } from './youtube/redux/reducers/UserCards.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forRoot({
      ytVideos: ytVideosReducer,
      userItems: userCardsReducer,
    }),
  ],
  providers: [WordFilterPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
