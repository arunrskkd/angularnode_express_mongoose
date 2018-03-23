import { Component, OnInit } from '@angular/core';
import { Product } from '../../shopping/product.model';
import { ProductService } from '../../shopping/product.service';
import { PurchaseserviceService } from '../purchaseservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {
  products:Product[];
  
  constructor(private serv:PurchaseserviceService,private router:Router) { }

  ngOnInit() {
    this.serv.getproductlist().subscribe((data:Product[]) => { this.products = data });
  }

  buyproduct(product:Product){
    this.serv.boughtitem(product);
    this.router.navigateByUrl('/purchase/productbuy');
  }

}
