import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../Services/Registration.Service';
import {Product} from '../Models/product.Model';


@Component({
  selector: 'app-testdisplay',
  templateUrl: './testdisplay.component.html',
  styleUrls: ['./testdisplay.component.scss']
})
export class TestdisplayComponent implements OnInit {
 
product: Product[];
  public globalResponse: any;
  service : RegistrationService;
  constructor(private RegistrationService : RegistrationService) { 
    this.service = RegistrationService;
    this.reloadProduct();
  }

  ngOnInit() {
  }

  reloadProduct(){
    this.RegistrationService.TestDisplay("MOUSE").subscribe(
      response =>this.handleSuccessfulResponse(response),
    );       
  }


  handleSuccessfulResponse(response)
{ // var token=response._body;
    this.product=response.json();
    console.log(this.product);
}

  // TestDisplay(){
  //   let id =1;
  //   this.RegistrationService.TestDisplay(id)
  //   .subscribe((result) => {
  //     this.globalResponse = result;              
  //   },error => {},() => {
  //     //This is Success part
  //    // console.log(this.globalResponse);

     
      }
    
  
    