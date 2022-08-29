import { group } from '@angular/animations';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Clothes } from 'src/app/models/clothes';
import { Order } from 'src/app/models/order';
import { ConnectDbService } from 'src/app/services/connect-db.service';

@Component({
  selector: 'app-order-input',
  templateUrl: './order-input.component.html',
  styleUrls: ['./order-input.component.scss']
})
export class OrderInputComponent implements OnInit {
  displayedColumns=[]
  constructor(public dialogRef: MatDialogRef<OrderInputComponent>,private fb:FormBuilder,private connectService:ConnectDbService) { }
  clotheName:any = [];
  supplierName:any=[];
  featuresName:any = [];
  formGrup!:FormGroup;
  ngOnInit(): void {

    this.formGrup = this.fb.group({
      tedarikci_adi:['', Validators.required],
      kiyafet_adi:['', Validators.required],
      adet:['', Validators.required],
      beden:['', Validators.required],
      siparis_tarihi:["", Validators.required],
      sezon:['', Validators.required],
      ozellik:['', Validators.required],
      birim:['', Validators.required],
      fiyat:['', Validators.required],
      para_birimi:['', Validators.required],
      kur:['', Validators.required],
      tl_fiyat:["" , Validators.required]

    })
    this.readClotheName()
    this.readSupplierName()
    this.readFeaturesName()
    
    
  }
  get f(){
    return this.formGrup.controls;
  }

  cancel(){
    this.dialogRef.close()
  }
  readClotheName() {
    this.connectService.getClothesName().subscribe((res) => {
      this.clotheName = res
      
      
    });
  }
  saveOrder(){
    console.log(this.formGrup.value)
    if (this.formGrup.valid){
      let order = Object.assign(this.formGrup.value, {} as Order)
      console.log(order)
      this.connectService.insertOrder(order).subscribe(res => {
        alert("Kıyafet Kaydedildi")
      })
      }
      else{
        alert("Tüm boşlukları doldurunuz")
      }
  }
  readSupplierName(){
    this.connectService.getSupplierName().subscribe((res) => {
      this.supplierName = res
      
      
    });
  }
  readFeaturesName(){
    this.connectService.getFeaturesName().subscribe((res) => {
      this.featuresName = res
      
      
    });
  }
  calculateTl_fiyat(){
    
    this.formGrup.controls['tl_fiyat'].setValue((this.formGrup.value.kur * this.formGrup.value.fiyat))
    console.log(this.formGrup.controls['tl_fiyat'])
   
  }

  }
