import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppCoreModule } from './core/app-core.module';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromLayout from './+state/layout.reducer';
import { LayoutEffects } from './+state/layout.effects';
import { LayoutFacade } from './+state/layout.facade';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppCoreModule,
    AppRoutingModule,
    StoreModule.forFeature(fromLayout.LAYOUT_FEATURE_KEY, fromLayout.reducer),
    EffectsModule.forFeature([LayoutEffects]),
  ],
  bootstrap: [AppComponent],
  providers: [LayoutFacade],
})
export class AppModule {}
