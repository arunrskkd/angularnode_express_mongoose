import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/Rx';
import { Response } from '@angular/http';
import { Product } from '../shopping/product.model';
import { Boughtitem } from './productbought.model';
@Injectable()
export class PurchaseserviceService {
  boughtproduct:Product;
  boughtitemlist:Boughtitem[]=[];
  constructor(private http:Http) {
    this.getbuyproduct().subscribe(
      (data:Boughtitem[]) => { this.boughtitemlist = data;
      })

   }

  getproductlist(){

      return this.http.get('https://dataservice-ebe36.firebaseio.com/items.json').map((response:Response) =>{ const dat = response.json(); return dat  });
    
  }

  buyproduct(products:Boughtitem){
    this.boughtitemlist.push(products);
    const body = JSON.stringify( this.boughtitemlist);
    const headers = new Headers({'Content-Type':'application/json'});
    return this.http.put('https://dataservice-ebe36.firebaseio.com/boughtitems.json',body,{headers:headers}).map((response:Response) =>{ const dat = response.json(); return dat  });
  }

  boughtitem(product:Product){
    this.boughtproduct = product;
  }


  getbuyproduct(){
    return this.http.get('https://dataservice-ebe36.firebaseio.com/boughtitems.json').map((response:Response) =>{ const dat = response.json(); return dat  });
  }

  

  

}
