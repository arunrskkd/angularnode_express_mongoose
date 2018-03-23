import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { AfterViewInit, AfterContentInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router/src/shared';
import { Router } from '@angular/router';
import { MsgservService } from '../../msgserv.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {
  additemform:FormGroup;
  editmode:boolean;
  edititem:Product;
  dateValue:Date;

  constructor(private serv:ProductService,private route: ActivatedRoute,private router:Router,private msgserv:MsgservService) {

    
   }

  ngOnInit() {
    this.oninitform();
    this.route.queryParams.subscribe((params: Params) => {
          let editmode = params['id'];
        
          if(editmode){
              this.editmode = true;
              this.edititem = this.serv.geteditproduct(editmode);
              console.log(this.edititem);
              this.additemform.setValue({
                'productname': this.edititem.productname,
                'productcost' : this.edititem.productcost,
                'productimage' : this.edititem.productimage,
                'detail' : this.edititem.detail,
                'productcolor': this.edititem.productcolor,
                'manufactdate': new Date(this.edititem.manufactdate),
               
              })
            
            }
            else{
              this.editmode = false;
              this.additemform.reset();
            }
        });
     
  
  }



  oninitform(){
    this.additemform = new FormGroup({
      'productname': new FormControl('',Validators.required),
       'productcost' : new FormControl('',Validators.required),
       'productimage' : new FormControl('',Validators.required),
       'detail' : new FormControl('',Validators.required),
       'productcolor': new FormControl('',Validators.required),
       'manufactdate': new FormControl('',Validators.required),
    });
    
  }

  onsubmit(){
    if(this.editmode){
      this. Updateproduct();
    }
    else{
      this.serv.addproducts(this.additemform.value);
      this.additemform.reset();
    }
    
  }

  Updateproduct(){
 
    this.msgserv.messages.next("Added");
    this.router.navigate(['/shopping/viewproducts'])
  }

  



}
