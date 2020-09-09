// @deprecated, need to update with the latest additions from Angular Universal

import { renderModuleFactory } from '@angular/platform-server';
import { writeFileSync } from 'fs';


const { AppServerModuleNgFactory } = require('./dist-server/main');

renderModuleFactory(AppServerModuleNgFactory, {
  document: '<app-root></app-root>',
  // if there is a `router-outlet`, we need this to decide which route to render
  url: '/',
})
  .then(html => {
    console.log('successful prerender');
    writeFileSync('./prerender.html', html);
  })
  .catch(console.error);
