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
import { InputAndErrorComponent } from './input-and-error/input-and-error.component';
@NgModule({
  declarations: [AppComponent, InputAndErrorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [WordFilterPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
