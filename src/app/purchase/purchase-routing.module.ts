import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductslistComponent } from './productslist/productslist.component';
import { ProductbuyComponent } from './productbuy/productbuy.component';
import { ProductboughtlistComponent } from './productboughtlist/productboughtlist.component';

const routes: Routes = [
  { path: '', redirectTo: 'productlist', pathMatch: 'full'
 
},
{ path: 'productlist', component: ProductslistComponent,
},
{ path: 'productbuy', component: ProductbuyComponent},
{ path: 'boughtproducts', component: ProductboughtlistComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
