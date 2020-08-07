import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FeaturesRoutingModule } from './features-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FeaturesRoutingModule,
  ],
})
export class FeaturesModule {}
