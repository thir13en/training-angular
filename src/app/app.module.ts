import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

import { MainLayoutComponent, ToggleHamburgerComponent } from '@layout/components';
import { DatePipe, FilterExamplePipe } from '@shared/pipes';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
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
