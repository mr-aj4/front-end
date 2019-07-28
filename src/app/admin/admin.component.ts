import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers:[AdminService]
})
export class AdminComponent implements OnInit {

  inventoryForm: FormGroup;

  constructor(private fb:FormBuilder,private adminService:AdminService) { }

  ngOnInit() {
    this.inventoryForm = this.fb.group({
     productName:  ['', Validators.compose([Validators.required])],
      productBrand:['',Validators.compose([Validators.required])],
      productPrice:['',Validators.compose([Validators.required])],
     productQuantity:['',Validators.required],
    });
  }

}
