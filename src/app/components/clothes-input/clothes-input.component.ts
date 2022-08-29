import { Employee } from './../../models/employee';
import { ConditionalExpr } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/models/product';
import { ConnectDbService } from 'src/app/services/connect-db.service';
import { ClothesTableComponent } from '../clothes-table/clothes-table.component';

@Component({
  selector: 'app-clothes-input',
  templateUrl: './clothes-input.component.html',
  styleUrls: ['./clothes-input.component.scss']
})
export class ClothesInputComponent implements OnInit {

  constructor(private dialog:MatDialog, public dialogRef: MatDialogRef<ClothesInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {clothe:Product}, private fb:FormBuilder, private connectService:ConnectDbService) { 

  }
  // sicil_no,ad_soyad,birim,unvan,beden,ayak_no,kan_grubu,cinsiyet,ilk_yardim
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
      kkd_dagitim_dayanagi:['', Validators.required],
      donem:['', Validators.required],
      kkd_ozellik:['', Validators.required],
      kkd_malzeme_cinsi:['', Validators.required],
      yil:['', Validators.required],
      verildigi_tarih:['', Validators.required],
      kkd_kullanim_suresi:['', Validators.required],
      sonraki_yil:['', Validators.required],
      alacak_bilgisi:['', Validators.required],
      aldi_bilgisi:['', Validators.required],
      durum_belirlenen_sure_icinde_mi_sure_asildi_mi:['', Validators.required],
      dagitim_planlandi_mi_aktif_verildi:['', Validators.required],
    })
    this.readClothes()
  }

  get f(){
    return this.formGrup.controls;
  }
  readClothes() {
    this.connectService.getSpecialClothes().subscribe((res) => {
      this.clothes = res[0]
      
      
    });
  }
  saveClothe(){
    
    if (this.formGrup.valid){
      console.log(this.formGrup.value)
      
    let clothe = Object.assign(this.clothes,this.formGrup.value)
    // console.log(clothe)
    // console.log(this.clothes)
    this.connectService.insertClothes(clothe).subscribe(res => {
      // console.log(res)
      alert("Çalışan Kaydedildi")
      this.refresh()
    })
    }
    else{
      
      
      alert("Tüm boşlukları doldurunuz")
    }
  }

  openDialogClothe(sicil_no:any,surname:any){

    this.connectService.getUserInformation2= sicil_no;
      
      this.dialog.open(ClothesTableComponent,{
        width:"1050px",
        data:{employee:sicil_no, nameSurname: surname }
        
      })
    }
    refresh(){
      this.dialog.closeAll();
      this.openDialogClothe(this.clothes.sicil_no,this.clothes.ad_soyad)
    }

  cancel(){
    this.dialogRef.close();

  }
}
