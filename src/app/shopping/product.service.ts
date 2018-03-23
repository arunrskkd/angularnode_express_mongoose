import { Injectable } from '@angular/core';
import { ProducthttpService } from './producthttp.service';
import { Product } from './product.model';
import { Subject } from 'rxjs/Subject';
import { error } from 'util';
import { Router } from '@angular/router';
import { MsgservService } from '../msgserv.service';
@Injectable()
export class ProductService {
  products:Product[]=[];
  productslist = new Subject<Product[]>();
  messages = new Subject<any>();
 
  
  constructor(private serv:ProducthttpService,private route:Router ,private msgserv:MsgservService ) {
    this.serv.getproductshtttp().subscribe(
        (data:Product[]) => { 
          if(data != null){
          this.products = data;
          this.productslist.next(this.products);
          }
        }
        );
   }

  addproducts(product:Product){
    this.products.push(product);
      this.serv.addproducthttp(this.products).subscribe(
        (data) => { 
             this.msgserv.messages.next("Added");
       
        },
      (error) =>{
        console.log(error)
      });
  }

  getproducts(){
      return this.products;
  }

  deleteproduct(item:Product){
    this.products =this.products.filter((data) => data !== item);
    this.serv.addproducthttp(this.products).subscribe(
      (data) => { 
         
        this.msgserv.messages.next("deleted");
            this.productslist.next(this.products);
      },
    (error) =>{
      console.log(error)
    });
  }

  editproduct(id:number){
    
    this.route.navigate(['/shopping/addproducts'],{ queryParams: {id:id}})
  
    
  }

  productedit(){
    return  this.serv.getproductshtttp();
  }

  geteditproduct(id:number){
    return this.products[id];
  }


}
