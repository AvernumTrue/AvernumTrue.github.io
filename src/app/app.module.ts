import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import routes from 'src/routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EdwinTestPageComponent } from './edwin-test-page/edwin-test-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EdwinTestPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
