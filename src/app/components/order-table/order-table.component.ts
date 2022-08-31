import { OrderUpdateComponent } from './../order-update/order-update.component';
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
  orderTalepEdildiArray:Order[]=[]
  orderSiparisOlusturulduArray:Order[]=[]
  orderTedarikSurecindeArray:Order[]=[]
  orderTeslimEdildiArray:Order[]=[]
  displayedColumns:string[] = ["tedarikci_adi","kiyafet_adi","adet","beden","siparis_tarihi","sezon","ozellik","birim","fiyat","para_birimi","kur","tl_fiyat","durum","Guncelle","Sil"];
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
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  refresh(){
    this.connectService.getOrder().subscribe((data: Order[]) => {
      this.dataSource.data = data;
    })

  }
  deleteOrder(siparis_id:any){
    if (confirm('Kaydı silmek istiyor musunuz? ')) {
      this.connectService.deleteOrder(siparis_id).subscribe((res) => {
        alert('Kayıt silindi!');
        this.refresh();
      });
    }
  }
  readTalepEdildi(){
    this.connectService.getTalepEdildi().subscribe(res=>{
      this.orderTalepEdildiArray = res;
      this.dataSource = new MatTableDataSource<Order>(this.orderTalepEdildiArray);
      this.dataSource.paginator = this.paginator;
      console.log(this.orderTalepEdildiArray);
    })
  }
  readSiparisVerildi(){
    this.connectService.getSiparisVerildi().subscribe(res=>{
      this.orderSiparisOlusturulduArray = res;
      this.dataSource = new MatTableDataSource<Order>(this.orderSiparisOlusturulduArray);
      this.dataSource.paginator = this.paginator;
      console.log(this.orderSiparisOlusturulduArray);
    })
  }
  readTedarikSurecinde(){
    this.connectService.getTedarikSurecinde().subscribe(res=>{
      this.orderTedarikSurecindeArray = res;
      this.dataSource = new MatTableDataSource<Order>(this.orderTedarikSurecindeArray);
      this.dataSource.paginator = this.paginator;
      console.log(this.orderTedarikSurecindeArray);
    })
  }
  readTeslimEdildi(){
    this.connectService.getTeslimEdildi().subscribe(res=>{
      this.orderTeslimEdildiArray = res;
      this.dataSource = new MatTableDataSource<Order>(this.orderTeslimEdildiArray);
      this.dataSource.paginator = this.paginator;
      console.log(this.orderTeslimEdildiArray);
    })
  }
  openDialog2(order:Order){
    
    this.connectService.getUserInformation6= order;
    this.dialog.open(OrderUpdateComponent,{
      data:{order:order }
      
    })
  }
 

}
