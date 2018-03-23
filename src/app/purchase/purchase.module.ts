import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { ProductslistComponent } from './productslist/productslist.component';
import { ProductbuyComponent } from './productbuy/productbuy.component';
import { ProductboughtlistComponent } from './productboughtlist/productboughtlist.component';
import { PurchaseserviceService } from './purchaseservice.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {ColorPickerModule} from 'primeng/colorpicker';
import {DataTableModule} from 'primeng/datatable';
@NgModule({
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ColorPickerModule,
    DataTableModule
  ],
  declarations: [ProductslistComponent, ProductbuyComponent, ProductboughtlistComponent],
  providers:[PurchaseserviceService]
})
export class PurchaseModule { }
