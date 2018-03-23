import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: any[];
  constructor() { }

  ngOnInit() {
    this.items = [
   
      {
          label: 'MENUS',
          icon: 'fa-align-justify',
          items: [
            {label: 'Dashboard', icon: 'fa-angle-right',routerLink: '/shopping/dashboard'},
              {label: 'Add product', icon: 'fa-angle-right',routerLink: '/shopping/addproducts'},
              {label: 'View product', icon: 'fa-angle-right',routerLink: '/shopping/viewproducts'},
              {label: 'Product list', icon: 'fa-angle-right',routerLink: '/purchase/productlist'},
              {label: 'Purchased Products', icon: 'fa-angle-right',routerLink: '/purchase/boughtproducts'},
             
          ]
      },
      {
        label: 'Report',
        icon: 'fa-align-justify',
        items: [
          {label: 'add green house', icon: 'fa-angle-right',routerLink: '/dailyreport/addchecker'},
          { label: 'Daily Report',icon: 'fa-align-justify', items: [
            {label: 'adddailyreport', icon: 'fa-angle-right',routerLink: '/dailyreport/adddailyreport'},

            {label: 'viewdailyreport', icon: 'fa-angle-right',routerLink: '/dailyreport/viewdailyreport'},
            // {label: 'Edit dailyreport', icon: 'fa-angle-right',routerLink: '/dailyreport/editdailyreport'},


          ]},
       
          

           
        ]
    },
     
     
  ];
  }

}
