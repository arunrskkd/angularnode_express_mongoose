import { Component, OnInit } from '@angular/core';
import { Boughtitem } from '../productbought.model';
import { PurchaseserviceService } from '../purchaseservice.service';

@Component({
  selector: 'app-productboughtlist',
  templateUrl: './productboughtlist.component.html',
  styleUrls: ['./productboughtlist.component.css']
})
export class ProductboughtlistComponent implements OnInit {
  item:Boughtitem[];
 

  constructor(private serv:PurchaseserviceService) { }

  ngOnInit() {
    this.serv.getbuyproduct().subscribe(
      (data:Boughtitem[]) => { this.item = data;
      
      
      }

    );
  }




}
