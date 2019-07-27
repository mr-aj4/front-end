import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule, NgbDate} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AdminComponent } from './admin/admin.component';
//mport { DatepickerAdapterComponent } from './datepicker-adapter/datepicker-adapter.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent//,
   // DatepickerAdapterComponent
  ],
  imports: [
    BrowserModule,NgbModule,FormsModule,ReactiveFormsModule,HttpClientModule,HttpModule,NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
