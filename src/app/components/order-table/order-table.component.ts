import { OrderInputComponent } from './../order-input/order-input.component';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Order } from 'src/app/models/order';
import { ConnectDbService } from 'src/app/services/connect-db.service';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements OnInit {
  orderArray: Order[]=[]
  displayedColumns:string[] = ["tedarikci_adi","kiyafet_adi","adet","beden","siparis_tarihi","sezon","ozellik","birim","fiyat","para_birimi","kur","tl_fiyat"];
  dataSource = new MatTableDataSource<Order>(this.orderArray)
  constructor(
  public dialog: MatDialog,
  private fb: FormBuilder,
  private router: Router,
  private ngbmodal: NgbModal,
  private connectService: ConnectDbService) { }
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit(): void {
    this.readOrder()
  }
  openDialog(){
    this.dialog.open(OrderInputComponent,{
      data:{ }
    })
  }
  readOrder(){
    
    this.connectService.getOrder().subscribe(res => { 
      
      this.orderArray=res;
      this.dataSource = new MatTableDataSource<Order>(this.orderArray)
      this.dataSource.paginator=this.paginator;
    
      console.log(this.orderArray)

    })
  }

}
