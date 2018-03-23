import { Component, OnInit } from '@angular/core';
import { CheckerService } from '../checker.service';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
@Component({
  selector: 'app-viewpart',
  templateUrl: './viewpart.component.html',
  styleUrls: ['./viewpart.component.css']
})
export class ViewpartComponent implements OnInit {
  checkers:{ "name": string; }[];
  constructor(private serv:CheckerService,private http:Http) { }

  ngOnInit() {
    this.checkers = this.serv.getchechker();
    this.serv.chekersdata.subscribe((data:{ "name": string; }[]) => {  this.checkers = data   });
    

  }
  

}
