import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import{MycartComponent} from './mycart/mycart.component';
import { ProductDisplayComponent } from './productdisplay/productdisplay.component';
import {RigsComponent} from './rigs/rigs.component';
import{PersonalComponent} from'./personal/personal.component';
import{BussinessComponent} from'./bussiness/bussiness.component';
import{GammingComponent} from'./gamming/gamming.component';

const routes: Routes = [{path:"admin",component:AdminComponent},{path:"mycart",component:MycartComponent},{path:"display",component:ProductDisplayComponent},{path:"rigs",component:RigsComponent},{path:"personal",component:PersonalComponent},{path:"bussiness",component:BussinessComponent},{path:"gamming",component:GammingComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
