import { MessageComponent } from './../message/message.component';
import { ClothesTableComponent } from './../clothes-table/clothes-table.component';
import { TableInputComponent } from './../table-input/table-input.component';
import { ConnectDbService } from './../../services/connect-db.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Employee } from 'src/app/models/employee';
import { TableInputUpdateComponent } from 'src/app/table-input-update/table-input-update.component';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { catchError, map, merge,Observable, of as observableOf } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  employeeArray:Employee[] = [] 
  displayedColumns: string[] = ["sicil_no","ad_soyad","unite","alt_birim","unvan","beden","ayak_no","kan_grubu","cinsiyet","ilk_yardim","Detail","Sil","Güncelle"];
  dataSource = new MatTableDataSource<Employee>(this.employeeArray)

  
  @ViewChild(MatPaginator)paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  count: any;


  constructor(private _httpClient:HttpClient,  public dialog:MatDialog, private fb:FormBuilder, private router:Router, private ngbmodal:NgbModal,private connectService:ConnectDbService) { }
  
  @Input() name!: string ;

  ngOnInit(): void {
    
    this.dataSource.paginator = this.paginator;
    // this.dataSource.sort=this.sort;
    
    this.connectService.getAktifEmployees().subscribe(data=>{
      
      this.dataSource=new MatTableDataSource(data);
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator
      this.dataSource.sort=this.sort
    })
      
    
    
  }

    getName(sicil_no:any){
      
    this.connectService.getData(sicil_no).subscribe((res) => {
      this.name = res;
     
      
    });  }

  

  formGrup!:FormGroup

  
  readEmployee(){
    
    this.connectService.getEmployees().subscribe(res => { 
      
      this.employeeArray=res;
      this.dataSource = new MatTableDataSource<Employee>(this.employeeArray)
      this.dataSource.paginator=this.paginator;
    
      console.log(this.employeeArray)

    })
  }
  openDialog(){
    this.dialog.open(TableInputComponent,{
      data:{ }
    })
  }
  openDialog2(employee:Employee){
    
    this.connectService.getUserInformation= employee;
    console.log(this.connectService.getUserInformation)
    this.dialog.open(TableInputUpdateComponent,{
      data:{employee:employee }
      
    })
  }
  update(employee:Employee):void{
    if (!employee) {
      return;
    }
    
    this.router.navigate([`table-input/${employee.sicil_no}`]);
  }


  deleteEmployer(sicil_no:any, aktif_pasif:any){
    if(confirm("Kayıdı silmek istiyor musunuz? ") && aktif_pasif == "Aktif") {
      this.connectService.aktifToPasif(sicil_no).subscribe(res => {
      
        alert("Kayıt pasife düşürüldü")
      })
      
    
    } 
    else{
      this.connectService.pasiftoAktif(sicil_no).subscribe(res => {
      
        alert("Kayıt aktife dönüştürüldü")
      })

    }
  }

  refresh(){
    window.location.reload(); 

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 
  openDialog3(sicil_no:any,surname:any){
    this.count = 0
    this.connectService.getUserInformation2= sicil_no;
    this.connectService.getClothesCount().subscribe((res) => {
      this.count = res[0].count
      console.log(this.count)
      if(this.count == 0){
        this.dialog.open(MessageComponent,{
          width:"1050px",
          data:{employee:sicil_no, nameSurname: surname }
          
        })
      }
      else{
        //this.connectService.getUserInformation2= sicil_no;
          
        this.dialog.open(ClothesTableComponent,{
          width:"1050px",
          data:{employee:sicil_no, nameSurname: surname }
          
        })
       
        }
    });
    
 

}

 



}
