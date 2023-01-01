import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from '@layout/components/main-layout/main-layout.component';


const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
/*    children: [
      {
        path: 'ng-di',
        loadChildren: () => import('./features/dependency-injection-demo/dependency-injection-demo.module')
          .then(m => m.DependencyInjectionDemoModule),
      },
      {
        path: '',
        loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule),
      },
    ], */
  },
  // TODO: add 404 { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledNonBlocking',
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
