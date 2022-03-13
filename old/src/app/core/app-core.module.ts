/*************************************************************************************
 *************************************************************************************
 ***********  CORE MODULE: to be imported only once in the AppModule  ****************
 *************************************************************************************
 *************************************************************************************/

import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserUnsupportedComponent, NotFoundComponent } from './pages';


@NgModule({
  exports: [HttpClientModule],
  declarations: [BrowserUnsupportedComponent, NotFoundComponent]
})
export class AppCoreModule {
  constructor(
    @Optional() @SkipSelf() parentModule: AppCoreModule
  ) {
    if (parentModule) {
      throw new Error('AppCoreModule is already loaded. You should only import it in the AppModule');
    }
  }
}
