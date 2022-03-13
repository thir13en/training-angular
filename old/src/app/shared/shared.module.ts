import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DatePipe, FilterExamplePipe } from '@shared/pipes';


@NgModule({
  imports: [
    FormsModule,
  ],
  declarations: [
    DatePipe,
    FilterExamplePipe,
  ],
  exports: [
    DatePipe,
    FilterExamplePipe,
  ],
})
export class SharedModule {}
