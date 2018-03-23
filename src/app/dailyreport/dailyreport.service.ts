import { Injectable } from '@angular/core';
import { Report } from './dailyreport.model';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class DailyreportService {
  selecteditem:Report;
  constructor(private http:Http) { }

  setitem(item:Report){
    this.selecteditem = item;
  }

  getitem(id:any) {
    return  this.http.get('http://localhost:3000/api/reportofid/'+id).map((data:Response)=>{  return data.json()       });
  }
}
