import { Component, OnInit } from '@angular/core';
import { DailyreportService } from '../dailyreport.service';
import { Report } from '../dailyreport.model'
import { HttpservService } from '../httpserv.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewdailyreport',
  templateUrl: './viewdailyreport.component.html',
  styleUrls: ['./viewdailyreport.component.css']
})
export class ViewdailyreportComponent implements OnInit {

  constructor(private serv:HttpservService,private router:Router,private service:DailyreportService) { }
  selectedCar:Report=new Report(null,null,null,'');
  data:Report[];
  displayDialog: boolean;
  ngOnInit() {
    this.serv.viewreport().subscribe(
    (data:Report[]) => {
      this.data = data;
      console.log(data)
    }
    );
    
  }

  onRowSelect(event) {
    
    this.selectedCar = event;
  
}

onedit(){
//  console.log(this.selectedCar)
 let id = this.selectedCar._id;
  this.router.navigateByUrl('dailyreport/editdailyreport/'+id);
}


}
