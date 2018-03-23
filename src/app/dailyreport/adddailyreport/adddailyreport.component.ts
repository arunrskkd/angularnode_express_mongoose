import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormArray} from '@angular/forms';
import { DailyreportService } from '../dailyreport.service';
import { CheckerService } from '../addchecker/checker.service';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Headers, RequestOptions } from '@angular/http';
import { HttpservService } from '../httpserv.service';

@Component({
  selector: 'app-adddailyreport',
  templateUrl: './adddailyreport.component.html',
  styleUrls: ['./adddailyreport.component.css']
})
export class AdddailyreportComponent implements OnInit {
  heroForm:FormGroup;
  cities = [

];
  constructor(private fb:FormBuilder,private serv:DailyreportService,private service:CheckerService,private http:Http,private httpserv:HttpservService) { }

  ngOnInit() {
    this.createForm();
    this.datainit().subscribe((data) => {
      this.cities = data;
    });
  }

  datainit(){
   return  this.http.get('http://localhost:3000/api/view').map((data:Response) =>{  return data.json() })
  }
  createForm() {
    this.heroForm = this.fb.group({
      date:['', Validators.required ],
      Greenhouse: ['', Validators.required ],
      itemRows:  this.fb.array([this.createItem() ])
   })
     

}

addNewRow() {
  // control refers to your formarray
  const control = <FormArray>this.heroForm.get('itemRows');
  // add new formgroup
  control.push(this.createItem());
}

onsubmit(form:FormGroup){
  
 
  this.httpserv.addreport(form.value).subscribe(() =>{
    form.reset();
    alert('submitted')
  });
  
}

createItem(): FormGroup {
  return this.fb.group({
    description: ['', Validators.required ],
    manpower:['', Validators.required ],
    remarks:['', Validators.required ]
   
  });
}

deleteRow(index: number) {
  const control =  <FormArray>this.heroForm.get('itemRows');
  control.removeAt(index);
}



}
export class MyModel {
  value: Date;
}


