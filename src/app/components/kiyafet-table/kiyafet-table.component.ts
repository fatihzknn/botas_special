import { KiyafetFeaturesComponent } from './../kiyafet-features/kiyafet-features.component';
import { OrderInputComponent } from './../order-input/order-input.component';
import { KiyafetUpdateComponent } from './../kiyafet-update/kiyafet-update.component';
import { Clothes } from './../../models/clothes';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/product';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectDbService } from 'src/app/services/connect-db.service';
import { KiyafetInputComponent } from '../kiyafet-input/kiyafet-input.component';

@Component({
  selector: 'app-kiyafet-table',
  templateUrl: './kiyafet-table.component.html',
  styleUrls: ['./kiyafet-table.component.scss']
})
export class KiyafetTableComponent implements OnInit {
  clothesArray: Clothes[] = [];
  
  

  dataSource = new MatTableDataSource<Clothes>(this.clothesArray);
  displayedColumns: string[] = ["kiyafet_adi","kullanim_suresi","SiparişVer","Güncelle","Sil","Ozellik"];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(public dialog: MatDialog, private router: Router, private connectService: ConnectDbService) { }
    formGrup!:FormGroup;

  ngOnInit(): void {
    
    this.readClothes();

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  readClothes() {
    this.connectService.getClothesForTable().subscribe((res) => {
      this.clothesArray = res;
      this.dataSource = new MatTableDataSource<Clothes>(this.clothesArray);
      this.dataSource.paginator = this.paginator; 
    });
    
  }
  openDialog(){
    this.dialog.open(KiyafetInputComponent,{
      data:{ }
    })
  }
  openDialog2(clothes:Clothes){
    
    this.connectService.getUserInformation3= clothes;
    console.log(this.connectService.getUserInformation)
    this.dialog.open(KiyafetUpdateComponent,{
      data:{clothes:clothes }
      
    })
  }
  deleteClothes(kiyafet_no:any){
    if (confirm('Kaydı silmek istiyor musunuz? ')) {
      this.connectService.deleteClothesForTable(kiyafet_no).subscribe((res) => {
        alert('Kayıt silindi!');
        this.refresh();
      });
    }
  }
  refresh(){
    this.connectService.getClothesForTable().subscribe((data: Clothes[]) => {
      this.dataSource.data = data;
    })
  }
  openDialog3(){
    this.dialog.open(OrderInputComponent,{
      data:{ }
    })
  }
  openDialog4(kiyafet_no:any, kiyafet_adi:any){
    this.dialog.open(KiyafetFeaturesComponent,{
      width:"1050px",
      data:{clothes_no:kiyafet_no, clothes_name: kiyafet_adi }
      
    })
    }

  }
  

  // openDialog() {
  //   this.dialog.open(ClothesInputComponent, {
  //     width: '527px',
  //     data: {},
  //   });
  // }

  // deleteClothe(sicil_no: any) {
  //   if (confirm('Kaydı silmek istiyor musunuz? ')) {
  //     this.connectService.deleteClothes(sicil_no).subscribe((res) => {
  //       alert('Kayıt silindi!');
  //       this.refresh();
  //     });
  //   }
   
  //   this.readClothes()
  // }

 

  

  
//  refresh() {
//     this.connectService.getClothes().subscribe((data: Clothes[]) => {
//       this.dataSource.data = data;
//     })
//   }

  // openDialog2(clothe: Product) {
  //   this.connectService.getUserInformation2 = clothe;
  //   console.log(this.connectService.getUserInformation);
  //   this.dialog.open(ClothesInputUpdateComponent, {
  //     width: '727px',
  //     data: { clothe: clothe },
  //   });
  // }

  



 


