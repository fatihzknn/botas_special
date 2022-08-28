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
  constructor(private dialog:MatDialog,public dialogRef: MatDialogRef<OrderInputComponent>,private fb:FormBuilder,private connectService:ConnectDbService
  ,@Inject(MAT_DIALOG_DATA) public data: {kiyafet_adi:any}) { }
  clothesName:Clothes={
    kiyafet_no:0,
    kiyafet_adi: '',
    kullanim_suresi: 0,
    kiyafet_turu:''
  }
  formGrup!:FormGroup;
  ngOnInit(): void {

    this.formGrup = this.fb.group({
      kiyafet_adi:['', Validators.required],
      adet:['', Validators.required],
      beden:['', Validators.required],
      siparis_tarihi:['', Validators.required],
      sezon:['', Validators.required],
      ozellik:['', Validators.required],
      birim:['', Validators.required],
    })
  }
  get f(){
    return this.formGrup.controls;
  }

  cancel(){
    this.dialogRef.close()
  }
  readClotheName() {
    this.connectService.getClothesName().subscribe((res) => {
      this.clothesName = res[0]
      
      
    });
  }
  saveOrder(){
    if (this.formGrup.valid){
      let order = Object.assign(this.formGrup.value, {} as Order)
      this.connectService.insertOrder(order).subscribe(res => {
        
        alert("Kıyafet Kaydedildi")
      })
      }
      else{
        alert("Tüm boşlukları doldurunuz")
      }
  }

  }
