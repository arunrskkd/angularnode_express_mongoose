import { Component, OnInit,Inject } from '@angular/core';
import{ Product  } from '../product.model';
import { ProductService } from '../product.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {
  products:Product[]=[];

  constructor(private ser:ProductService,public dialog: MatDialog) { 
   
  }

  ngOnInit() {
    this.ser.productslist.subscribe((data:Product[]) => { this.products = data })
    this.products = this.ser.getproducts();
      }



  delete(product:Product){
    this.ser.deleteproduct(product);
  }


  viewdetails(product:Product){
    this.openDialog(product);
  }



  openDialog(product:Product): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '50%',
      data: { name: product }
    });

    dialogRef.afterClosed().subscribe(result => {
    
    });
  }

  editproduct(id:number){
    this.ser.editproduct(id);
    console.log(id);
    
  }
}




@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'popupview.html',
  styleUrls: ['./viewproducts.component.css']
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
