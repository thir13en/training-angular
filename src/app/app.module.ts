import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipe } from './pipes/date.pipe';
import { FilterExamplePipe } from './pipes/filter-example.pipe';
import { TemplateDrivenFormPasswordValidationComponent } from './features/template-driven-form-password-validation/template-driven-form-password-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    DatePipe,
    FilterExamplePipe,
    TemplateDrivenFormPasswordValidationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
