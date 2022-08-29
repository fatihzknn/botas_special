import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Suppliers } from 'src/app/models/suppliers';
import { ConnectDbService } from 'src/app/services/connect-db.service';
import { SuppliersInputComponent } from '../suppliers-input/suppliers-input.component';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss']
})
export class SuppliersComponent implements OnInit {
  suppliersArray:Suppliers[] = [] 
  displayedColumns: string[] = ["tedarikci_adi","tedarik_edilen_mal","Sil"];
  dataSource = new MatTableDataSource<Suppliers>(this.suppliersArray)

  @ViewChild(MatPaginator)paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private _httpClient:HttpClient,  public dialog:MatDialog, private fb:FormBuilder, private router:Router, private ngbmodal:NgbModal,private connectService:ConnectDbService) { }

  @Input() name!: string ;

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    
    this.connectService.getSupplier().subscribe(data=>{
      
      this.dataSource=new MatTableDataSource(data);
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator
      this.dataSource.sort=this.sort
  })

}
// getName(tedarikci_adi:any){
      
//   this.connectService.getSupplierName(tedarikci_adi).subscribe((res) => {
//     this.name = res;
   
    
//   });  }



formGrup!:FormGroup


readSuppliers(){
  
  this.connectService.getSupplier().subscribe(res => { 
    
    this.suppliersArray=res;
    this.dataSource = new MatTableDataSource<Suppliers>(this.suppliersArray)
    this.dataSource.paginator=this.paginator;
  
    console.log(this.suppliersArray)

  })
}

deleteSupplier(tedarikci_id: any) {
  console.log("merhaba")
  if (confirm('Kaydı silmek istiyor musunuz? ')) {
    this.connectService.deleteSuppliers(tedarikci_id).subscribe((res) => {
      alert('Kayıt silindi!');
      this.refresh();
    });
  }
 
  this.readSuppliers()

}
// openDialog2(suppliers:Suppliers){
    
//   this.connectService.getUserInformation5= suppliers;
//   console.log(this.connectService.getUserInformation5)
//   this.dialog.open(SupplierInputUpdateComponent,{
//     data:{suppliers:suppliers }
    
//   })
// }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(){
    this.dialog.open(SuppliersInputComponent,{
      data:{ }
    })
  }

  refresh(){
    window.location.reload(); 
  }


}