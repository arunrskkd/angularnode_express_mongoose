import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcheckerComponent } from './addchecker/addchecker.component';
import { AdddailyreportComponent } from './adddailyreport/adddailyreport.component';
import { ViewdailyreportComponent } from './viewdailyreport/viewdailyreport.component';
import { EditdailyreportComponent } from './editdailyreport/editdailyreport.component';

const routes: Routes = [
  {path:'addchecker',component:AddcheckerComponent},
  {path:'adddailyreport',component:AdddailyreportComponent},
  {path:'viewdailyreport',component:ViewdailyreportComponent},
  {path:'editdailyreport/:id',component:EditdailyreportComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyreportRoutingModule { }
