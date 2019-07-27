import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import{MycartComponent} from './mycart/mycart.component';
import { ProductDisplayComponent } from './productdisplay/productdisplay.component';

const routes: Routes = [{path:"admin",component:AdminComponent},{path:"mycart",component:MycartComponent},{path:"display",component:ProductDisplayComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
