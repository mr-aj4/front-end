import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule, NgbDate} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AdminComponent } from './admin/admin.component';
import{MycartComponent} from './mycart/mycart.component';
import { ProductDisplayComponent } from './productdisplay/productdisplay.component';
import {RigsComponent} from './rigs/rigs.component';
import{PersonalComponent} from'./personal/personal.component';
import{BussinessComponent} from'./bussiness/bussiness.component';
import{GammingComponent} from'./gamming/gamming.component';
import{UserComponent} from './user/user.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ProductDisplayComponent,MycartComponent,RigsComponent,PersonalComponent,BussinessComponent,GammingComponent,UserComponent
  ],
  imports: [
    BrowserModule,NgbModule,FormsModule,ReactiveFormsModule,HttpClientModule,HttpModule,NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
