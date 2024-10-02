import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'accordion',
        loadChildren: () => import('./components/accordion/accordion.module').then(m => m.AccordionModule)
      },
      {
        path: 'datalist',
        loadChildren: () => import('./components/html-datalist/html-datalist.module').then(m => m.HtmlDatalistModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
