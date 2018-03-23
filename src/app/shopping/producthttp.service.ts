import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Product } from './product.model';
import 'rxjs/Rx';
import { Response } from '@angular/http';
@Injectable()
export class ProducthttpService {

  constructor(private http:Http) { }

  addproducthttp(products:Product[]){
    const body = JSON.stringify(products);
    const headers = new Headers({'Content-Type':'application/json'});
    return this.http.put('https://dataservice-ebe36.firebaseio.com/items.json',body,{headers:headers}).map((response:Response) =>{ const dat = response.json(); return dat  });
  }

  getproductshtttp(){
    return this.http.get('https://dataservice-ebe36.firebaseio.com/items.json').map((response:Response) =>{ const dat = response.json(); return dat  });
  }
}
