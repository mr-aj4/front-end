import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Inventory} from '../Models/Inventory.Models';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers:[AdminService]
})
export class AdminComponent implements OnInit {

  inventoryForm: FormGroup;
  inventoryInputs:Inventory[];

  constructor(private fb:FormBuilder,private adminService:AdminService) { }

  ngOnInit() {
    this.inventoryForm = this.fb.group({
     productName:  ['', Validators.compose([Validators.required])],
      productBrand:['',Validators.compose([Validators.required])],
      productPrice:['',Validators.compose([Validators.required])],
     productQuantity:['',Validators.required],
    });

  }
    AddInventory(){
      this.inventoryInputs=this.inventoryForm.value;
      console.log(this.inventoryInputs);
    }
  

}
