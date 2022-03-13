import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordFilterPipe } from './youtube/pipes/word-filter.pipe';
import { YoutubeModule } from './youtube/youtube.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
  ],
    providers: [WordFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
