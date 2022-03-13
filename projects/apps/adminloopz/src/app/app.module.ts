import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import * as fromUI from './+state/ui/ui.reducer';
import { UIFacade } from './+state/ui/ui.facade';

import { AppComponent } from './app.component';
import { AppCoreModule } from './core/app-core.module';
import { AppRoutingModule } from './app-routing.module';
import { MainLayoutComponent } from './layout/components/main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ [fromUI.UI_FEATURE_KEY]: fromUI.reducer }),
    AppCoreModule,
  ],
  bootstrap: [AppComponent],
  providers: [UIFacade],
})
export class AppModule {}
