import { Component, OnInit } from '@angular/core';
import { AddProduct } from '../Services/admin.services';
import { OrderService } from '../Services/order.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.inventoryForm = this.fb.group({
      name:  ['', Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(50)])],
      password:['',Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(50)])],
      email:['',Validators.compose([Validators.required,Validators.email])],
      //Role:['',Validators.required],
      mob:['',Validators.required],
      dob:[''],
    });
  }

}
