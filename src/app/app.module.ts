import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpModule } from '@angular/http';
import {DataTableModule} from 'primeng/datatable';
import {PanelMenuModule} from 'primeng/panelmenu';
import { MenuComponent } from './menu/menu.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {GrowlModule} from 'primeng/growl';
import { MsgservService } from './msgserv.service';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    MatExpansionModule,
    HttpModule,
    DataTableModule,
    PanelMenuModule,
    ProgressSpinnerModule,
    GrowlModule
  ],
  providers: [MsgservService],
  bootstrap: [AppComponent]
})
export class AppModule { }
