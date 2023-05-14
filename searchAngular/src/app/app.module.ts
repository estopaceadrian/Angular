import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { YoutubeSearchComponent } from './youtube-search/youtube-search.component';
import { youTubeSearchInjectables } from './youtube-search/youtube-search.injectables';

@NgModule({
  declarations: [AppComponent, SimpleHttpComponent, YoutubeSearchComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [youTubeSearchInjectables],
  bootstrap: [AppComponent],
})
export class AppModule {}
