import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadAllModules } from '@angular/router';


const routes: Routes = [
 
  {
    path: 'shopping',
    loadChildren: 'app/shopping/shopping.module#ShoppingModule',
  },
  {
    path: 'purchase',
    loadChildren: 'app/purchase/purchase.module#PurchaseModule',
    // data: {preload: true}
  },
  {
    path: 'dailyreport',
    loadChildren: 'app/dailyreport/dailyreport.module#DailyreportModule',
    // data: {preload: true}
  },
 
  {
    path: '',
    redirectTo: 'shopping',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
