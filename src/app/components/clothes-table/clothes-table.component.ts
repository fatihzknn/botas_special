import { ConnectDbService } from './../../services/connect-db.service';
import { ClothesInputUpdateComponent } from './../clothes-input-update/clothes-input-update.component';
import { ClothesInputComponent } from './../clothes-input/clothes-input.component';
import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { TableInputComponent } from '../table-input/table-input.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-clothes-table',
  templateUrl: './clothes-table.component.html',
  styleUrls: ['./clothes-table.component.scss'],
})
export class ClothesTableComponent implements OnInit {
  clothesArray: Product[] = [];
  clothesAktifArray: Product[] = [];
  

  dataSource = new MatTableDataSource<Product>(this.clothesArray);
  displayedColumns: string[] = ["kiyafet_id","sicil_no","kkd_malzeme_cinsi","kkd_ozellik","verildigi_tarih","kkd_dagitim_dayanagi","kkd_kullanim_suresi","donem","yil","sonraki_yil","alacak_bilgisi","aldi_bilgisi","durum_belirlenen_sure_icinde_mi_sure_asildi_mi","dagitim_planlandi_mi_aktif_verildi","Sil","Güncelle"];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: {nameSurname: string},
    public dialogRef: MatDialogRef<ClothesTableComponent>,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private router: Router,
    private ngbmodal: NgbModal,
    private connectService: ConnectDbService
  ) {}



  ngOnInit(): void {
    this.readClothes();
  }

  readClothes() {
    this.connectService.getClothes().subscribe((res) => {
      this.clothesArray = res;
      this.dataSource = new MatTableDataSource<Product>(this.clothesArray);
      this.dataSource.paginator = this.paginator;
      
      
    });
    
  }
  

  openDialog() {
    this.dialog.open(ClothesInputComponent, {
      width: '527px',
      data: {},
    });
  }

  deleteClothe(sicil_no: any) {
    if (confirm('Kaydı silmek istiyor musunuz? ')) {
      this.connectService.deleteClothes(sicil_no).subscribe((res) => {
        alert('Kayıt silindi!');
        this.refresh();
      });
    }
   
    this.readClothes()
  }

  update(clothe: Product): void {
    if (!clothe) {
      return;
    }

    this.router.navigate([`table-input/${clothe.sicil_no}`]);
  }

  // refresh(){
  //   window.location.reload();

  // }


  
 refresh() {
    this.connectService.getClothes().subscribe((data: Product[]) => {
      this.dataSource.data = data;
    })
  }

  openDialog2(clothe: Product) {
    this.connectService.getUserInformation2 = clothe;
    console.log(this.connectService.getUserInformation);
    this.dialog.open(ClothesInputUpdateComponent, {
      width: '727px',
      data: { clothe: clothe },
    });
  }

  cancel() {
    this.dialogRef.close();
  }

  getAktifClothes(){
    this.connectService.getAktifClothes().subscribe(res=>{
      this.clothesAktifArray = res;
      this.dataSource = new MatTableDataSource<Product>(this.clothesAktifArray);
      this.dataSource.paginator = this.paginator;
      console.log(this.clothesAktifArray);
    })
  }

  getVerildi(){
    this.connectService.getPasifClothes().subscribe(res=>{
      this.clothesAktifArray = res;
      this.dataSource = new MatTableDataSource<Product>(this.clothesAktifArray);
      this.dataSource.paginator = this.paginator;
      console.log(this.clothesAktifArray);
    })
  }


}
