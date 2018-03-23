import { Component, OnInit } from '@angular/core';
import { CheckerService } from '../checker.service';

@Component({
  selector: 'app-addpart',
  templateUrl: './addpart.component.html',
  styleUrls: ['./addpart.component.css']
})
export class AddpartComponent implements OnInit {
  checker:string;
  constructor(private serv:CheckerService) { }

  ngOnInit() {
  }
  addchecker(){
    this.serv.addchecker(this.checker);
    this.checker = "";
  }

}
