import {Input, Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Registration } from './Models/User.Models';
import {RegistrationService} from './Services/Registration.Service'
import { AuthenticationService } from './Services/authentication.service';
// import {JwtHelperService} from '@auth0/angular-jwt';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[RegistrationService]
})
export class AppComponent implements OnInit {
  closeResult: string;
  registrationForm: FormGroup;
  loginForm:FormGroup;
  registrationInputs: Registration[];
  currentUser: Registration[];
  isLoggedIn:boolean=false;

  cartItemCount:number=0;
  approvalText:string="";

  @Input()
  public alerts: Array<IAlert> = [];

  message = "";
  public globalResponse: any;

  constructor( private modalService: NgbModal,private fb: FormBuilder,private regService:RegistrationService,private authService:AuthenticationService ) {

  }
  ngOnInit()
  {
    this.registrationForm = this.fb.group({
      name:  ['', Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(50)])],
      password:['',Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(50)])],
      email:['',Validators.compose([Validators.required,Validators.email])],
      mob:['',Validators.required],
      dob:[''],
    });
    this.loginForm = this.fb.group({
      email:  ['', [Validators.required]],
      password:['',[Validators.required]],
    });
  }

  open(content) {
    this.alerts=[];
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  Login()
  {
    let user=this.loginForm.value;
    this.isLoggedIn=false;
    this.authService.removeToken();
    this.alerts=[];
    //console.log(user);
        this.authService.ValidateUser(user)
            .subscribe((result) => {
              this.globalResponse = result;              
            },
            error => { //This is error part
              console.log(error.message);
              this.alerts.push({
                id: 2,
                type: 'danger',
                message: 'Either user name or password is incorrect.'
              });
            },
            () => {
                //This is Success part
                //console.log(this.globalResponse._body);
                var token = this.globalResponse._body;
                var decoded = jwt_decode(token); 
                console.log(decoded.role);  //prinitng role               
                //console.log(decoded);
                this.authService.storeToken(this.globalResponse._body);  
                this.authService.storeRole(decoded.role);
                 this.alerts.push({
                   id: 1,
                   type: 'success',
                   message: 'Login successful. Now you can close and proceed further.',
                 });
                 this.isLoggedIn=true;
                 //this.GetClaims();
                
                }
            )
  }
  
  OnRegister()
  { 
    let ngbdate=this.registrationForm.controls['dob'].value;
    let month = ngbdate.month;
    if(month<10){
         month = "0"+ngbdate.month;
    }
    let day = ngbdate.day;
    if(day<10){
      day = "0"+ngbdate.day;
    } 
    let mydate= ngbdate.year+"-"+month+"-"+day;

    this.registrationInputs=this.registrationForm.value;
    this.registrationInputs['dob']=mydate;
    console.log(this.registrationInputs);
    //console.log(this.loginForm.value);
        this.regService.RegisterUser(this.registrationInputs)
            .subscribe((result) => {
              this.globalResponse = result;              
            },
            error => { //This is error part
              this.alerts.push({
                id: 2,
                type: 'danger',
                message: 'Registration failed with fallowing error:'+error,
              });
            },
            () => {
                //  This is Success part
                this.alerts.push({
                  id: 1,
                  type: 'success',
                  message: 'Registration successful.',
                });
                
                }
              )
            }
     public closeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  } 
  

  GetClaims()
  {
        this.authService.getClaims()
            .subscribe((result) => {
              this.globalResponse = result;              
            },
            error => { //This is error part
              console.log(error.message);
            },
            () => {
                //  This is Success part
               console.log(this.globalResponse );
                let a=this.globalResponse;
                this.currentUser=this.globalResponse;
                this.authService.storeRole(this.currentUser);
                }
              )
            
  } 
  LogOut()
  {
    this.isLoggedIn=false;
    this.authService.removeToken();
  }
 

}
export interface IAlert {
  id: number;
  type: string;
  message: string;
}
