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
  globalresponse:any;

  constructor(private fb:FormBuilder,private adminService:AdminService) { }

  ngOnInit() {
    this.inventoryForm = this.fb.group({
      productName:  ['', Validators.required],
      brand:['',Validators.required],
      modelNumber:['',Validators.required],
      category:['',Validators.required],
      price:['',Validators.required],
      quantity:['',Validators.required],
      description:['',Validators.required],
    });

  }

    AddInventory(){
       this.inventoryInputs=this.inventoryForm.value;
      // console.log(this.inventoryInputs);
      // console.log(this.inventoryForm);
      console.log(this.inventoryInputs);
      this.adminService.AddProduct(this.inventoryInputs)
          .subscribe((result)=>{
            this.globalresponse=result;
          },error =>{},
          ()=>
          {});

    }
  

}
