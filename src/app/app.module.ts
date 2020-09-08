import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { AppCoreModule } from '@core/app-core.module';
import { MainLayoutComponent, ToggleHamburgerComponent } from '@layout/components';
import { DatePipe, FilterExamplePipe } from '@shared/pipes';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppCoreModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
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
