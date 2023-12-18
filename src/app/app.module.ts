import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestDatepickerComponent } from './test-datepicker/test-datepicker.component';
import { TestingFormComponent } from './testing-form/testing-form.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestDatepickerComponent,
    TestingFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
