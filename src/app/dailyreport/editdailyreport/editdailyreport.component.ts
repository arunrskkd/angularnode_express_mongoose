import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormArray} from '@angular/forms';
import { Http } from '@angular/http';
import { Response } from '@angular/http/src/static_response';
import { DailyreportService } from '../dailyreport.service';
import { Report } from '../dailyreport.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpservService } from '../httpserv.service';
@Component({
  selector: 'app-editdailyreport',
  templateUrl: './editdailyreport.component.html',
  styleUrls: ['./editdailyreport.component.css']
})
export class EditdailyreportComponent implements OnInit {
  heroForm:FormGroup;
  selecteditem:Report;
  cities = [];


  constructor(private fb:FormBuilder,private http:Http,private service:DailyreportService,private router:ActivatedRoute,private httpserv:HttpservService,private rout:Router) { }

  ngOnInit() {
    this.createForm();
    this.datainit().subscribe((data) => {
      this.cities = data;
      this.getreport();
     
    });

  }


  datainit(){
    return  this.http.get('http://localhost:3000/api/view').map((data:Response) =>{  return data.json() })
   }

  createForm() {
    this.heroForm = this.fb.group({
      date:['', Validators.required ],
      Greenhouse: ['', Validators.required ],
      itemRows:  this.fb.array([ ])
   })
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

addNewRow() {
  // control refers to your formarray
  const control = <FormArray>this.heroForm.get('itemRows');
  // add new formgroup
  control.push(this.createItem());
}

getreport(): void {
  const id = this.router.snapshot.paramMap.get('id');
  
 this.service.getitem(id).subscribe((data:Report) => {
          
          this.selecteditem = data;
          const control = <FormArray>this.heroForm.get('itemRows');
          this.heroForm.controls['Greenhouse'].setValue(data.Greenhouse);
          console.log(data.date)
          this.heroForm.controls['date'].setValue(new Date(data.date));
         for(let x in data.itemRows){
          
           

            control.push(this.fb.group({
              description: [data.itemRows[x].description, Validators.required ],
              manpower:[data.itemRows[x].manpower, Validators.required ],
              remarks:[data.itemRows[x].remarks, Validators.required ]
             
            }));
         }

          
 })
}

onsubmit(form:FormGroup){
  
  const id = this.router.snapshot.paramMap.get('id');
  this.httpserv.updatereport(form.value,id).subscribe(() =>{
    form.reset();
    alert('submitted')
    this.rout.navigateByUrl('dailyreport/viewdailyreport')
  });
  
}

}


