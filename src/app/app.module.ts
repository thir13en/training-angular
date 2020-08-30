import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

import { MainLayoutComponent, ToggleHamburgerComponent } from '@layout/components';
import { DatePipe } from '@shared/pipes/date.pipe';
import { FilterExamplePipe } from '@shared/pipes/filter-example.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


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
