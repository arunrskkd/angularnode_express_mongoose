import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CheckerService {
  checkers:{"name":string}[]=[];
  chekersdata = new Subject<{"name":string}[]>();
  constructor(private http:Http) {
    this.getchekersdata().subscribe(
      (data:{"name":string}[]) =>{
         this.checkers = data; 
         this.chekersdata.next(this.checkers); 
        }
    );
   }

  addchecker(checker:any){
    this.checkers.push({"name":checker});
    this.storeservers(checker).subscribe((data) =>{
      alert('added')
    });
  }

  getchechker(){
    return this.checkers;
  }

  storeservers(servers:string){
    return this.http.post('http://localhost:3000/api/add',{name:servers}).map((data:Response) =>{  return data.json()        });
  }

  getchekersdata(){
    return this.http.get('http://localhost:3000/api/view').map((data:Response) =>{  return data.json()        });
  }
 

}
