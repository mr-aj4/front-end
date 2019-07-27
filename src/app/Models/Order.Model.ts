import { Item } from "./Item.Model";

export interface Order
{
     orderID :number;
     email:string;
     doo:Date;
     status:string;
     total:number;
     address:string;
}