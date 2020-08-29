import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipe } from './shared/pipes/date.pipe';
import { FilterExamplePipe } from './shared/pipes/filter-example.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DatePipe,
    FilterExamplePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
