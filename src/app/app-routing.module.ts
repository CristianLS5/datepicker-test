import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestDatepickerComponent } from './test-datepicker/test-datepicker.component';

const routes: Routes = [
  { path: 'test-datepicker', component: TestDatepickerComponent },
  // ... other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
