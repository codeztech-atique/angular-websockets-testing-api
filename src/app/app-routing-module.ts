import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

// User Components
import { CustomerComponent } from './customer/customer.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  // Common Routes
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: 'home',
    component: CustomerComponent,
    data: { title: 'Customer Page' },
  },
  {
    path: 'support',
    component: SupportComponent,
    data: { title: 'Support Page' },
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class CommonRoutingModule {}
