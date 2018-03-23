import { Component } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {SelectItem} from 'primeng/components/common/api';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';
import { MsgservService } from './msgserv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  options: FormGroup;
  panelOpenState: boolean = false;
  msgs: Message[] = [];
  constructor(fb: FormBuilder,private serv:MsgservService) {
    this.options = fb.group({
      'fixed': false,
      'top': 0,
      'bottom': 0,
    });
  }

  shouldRun = true;


  ngOnInit() {
    this.serv.messages.subscribe((data) => {
      this.showmsg(data);
    });
  }
  showmsg(data){
    if(data == "Added"){
      this.showSuccess()
    }
    else if(data == "deleted"){
      this.showWarn()
    }
  }
  showSuccess() {
    this.msgs = [];
    this.msgs.push({severity:'success', summary:'Success Message', detail:' Succesfully Completed'});
} 

showInfo() {
    this.msgs = [];
    this.msgs.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});
}

showWarn() {
    this.msgs = [];
    this.msgs.push({severity:'warn', summary:'Warn Message', detail:'Succesfully Deleted'});
}

showError() {
    this.msgs = [];
    this.msgs.push({severity:'error', summary:'Error Message', detail:'Validation failed'});
}







 
}

