import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './employee/list/list.component';
import { ProductListComponent } from './product/list/list.component';

const routes: Routes = [
  {
    path: 'employees',
    component: ListComponent,
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: '**',
    redirectTo: 'employees',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
