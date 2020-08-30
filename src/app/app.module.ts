import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipe } from './shared/pipes/date.pipe';
import { FilterExamplePipe } from './shared/pipes/filter-example.pipe';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    ToggleHamburgerComponent,
    MainLayoutComponent,
    DatePipe,
    FilterExamplePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
