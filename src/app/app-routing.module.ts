import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/directives-demo/directives-demo.module').then(m => m.DirectivesDemoModule),
  },
  {
    path: 'di',
    loadChildren: () => import('./features/dependency-injection-demo/dependency-injection-demo.module').then(m => m.DependencyInjectionDemoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
