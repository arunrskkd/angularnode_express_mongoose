import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyreportRoutingModule } from './dailyreport-routing.module';
import { AddcheckerComponent } from './addchecker/addchecker.component';
import { AdddailyreportComponent } from './adddailyreport/adddailyreport.component';
import { ViewdailyreportComponent } from './viewdailyreport/viewdailyreport.component';
import { AddpartComponent } from './addchecker/addpart/addpart.component';
import { ViewpartComponent } from './addchecker/viewpart/viewpart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckerService } from './addchecker/checker.service';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {DailyreportService} from './dailyreport.service';
import {TableModule} from 'primeng/table';
import {DataTableModule} from 'primeng/datatable';
import {DialogModule} from 'primeng/dialog';
import {HttpservService} from './httpserv.service';
import { EditdailyreportComponent } from './editdailyreport/editdailyreport.component';
@NgModule({
  imports: [
    CommonModule,
    DailyreportRoutingModule,
    FormsModule,
    CalendarModule,
    DropdownModule,
    ReactiveFormsModule,
    TableModule,
    DataTableModule,
    DialogModule
  ],
  providers:[CheckerService,DailyreportService,HttpservService],
  declarations: [AddcheckerComponent, AdddailyreportComponent, ViewdailyreportComponent, AddpartComponent, ViewpartComponent, EditdailyreportComponent]
})
export class DailyreportModule { }
