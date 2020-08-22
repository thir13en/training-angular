import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule),
  },
  {
    path: 'directives',
    loadChildren: () => import('./features/directives-demo/directives-demo.module').then(m => m.DirectivesDemoModule),
  },
  {
    path: 'ng-di',
    loadChildren: () => import('./features/dependency-injection-demo/dependency-injection-demo.module')
                          .then(m => m.DependencyInjectionDemoModule),
  },
  // TODO: add 404 { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
