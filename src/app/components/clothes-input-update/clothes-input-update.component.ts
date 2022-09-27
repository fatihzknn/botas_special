import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/models/employee';
import { Product } from 'src/app/models/product';
import { ConnectDbService } from 'src/app/services/connect-db.service';

@Component({
  selector: 'app-clothes-input-update',
  templateUrl: './clothes-input-update.component.html',
  styleUrls: ['./clothes-input-update.component.scss']
})
export class ClothesInputUpdateComponent implements OnInit {
  clothesArray: Product[] = [];
  dataSource = new MatTableDataSource<Product>(this.clothesArray);
  constructor(@Inject(MAT_DIALOG_DATA) public data: {clothe: Product},public dialogRef: MatDialogRef<ClothesInputUpdateComponent>,private fb:FormBuilder,private connectService:ConnectDbService) { }
  clothes: Employee = {
    sicil_no: 0,
    ad_soyad: '',
    unite: '',
    alt_birim:'',
    unvan: '',
    beden: 0,
    ayak_no: 0,
    kan_grubu: '',
    cinsiyet: '',
    ilk_yardim: '',
    aktif_pasif:''
   
  
  }
  formGrup!:FormGroup;
  ngOnInit(): void {
    this.formGrup = this.fb.group({
      sicil_no:[this.data.clothe.sicil_no, Validators.required],
      kkd_dagitim_dayanagi:[this.data.clothe.kkd_dagitim_dayanagi, Validators.required],
      donem:[this.data.clothe.donem, Validators.required],
      kkd_ozellik:[this.data.clothe.kkd_ozellik, Validators.required],
      kkd_malzeme_cinsi:[this.data.clothe.kkd_malzeme_cinsi, Validators.required],
      yil:[this.data.clothe.yil, Validators.required],
      verildigi_tarih:[this.data.clothe.verildigi_tarih, Validators.required],
      kkd_kullanim_suresi:[this.data.clothe.kkd_kullanim_suresi, Validators.required],
      sonraki_yil:[this.data.clothe.sonraki_yil, Validators.required],
      alacak_bilgisi:[this.data.clothe.alacak_bilgisi, Validators.required],
      aldi_bilgisi:[this.data.clothe.aldi_bilgisi, Validators.required],
      durum_belirlenen_sure_icinde_mi_sure_asildi_mi:[this.data.clothe.durum_belirlenen_sure_icinde_mi_sure_asildi_mi, Validators.required],
      dagitim_planlandi_mi_aktif_verildi:[this.data.clothe.dagitim_planlandi_mi_aktif_verildi, Validators.required],

    })
    this.readClothes()
  }
  get f() { 
    return this.formGrup.controls; 
  }

  readClothes() {
    this.connectService.getSpecialClothes().subscribe((res) => {
      this.clothes = res[0]
      
      
    });
  }
  updateClothe(){
    
    let clothe = Object.assign(this.clothes,this.formGrup.value)
    
    this.connectService.updateClothes(clothe).subscribe(res => {
     console.log(clothe)
     console.log(this.clothes)
      console.log(res)
      
      alert("Başarıyla Güncellendi!")
      this.connectService.getClothes()
      this.refresh()
    
    })
  }

    refresh() {
      this.connectService.getClothes().subscribe((data: Product[]) => {
        this.dataSource.data = data;
      })
    }
  
  
  cancel(){
    this.dialogRef.close()
  }
}
