import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order';
import { ConnectDbService } from 'src/app/services/connect-db.service';

@Component({
  selector: 'app-order-update',
  templateUrl: './order-update.component.html',
  styleUrls: ['./order-update.component.scss']
})
export class OrderUpdateComponent implements OnInit {
  supplierName:any[]=[]
  featuresName:any[]=[]
  clotheName:any = [];
  constructor(public dialog: MatDialog, private fb: FormBuilder, private router: Router, private connectService: ConnectDbService
    ,@Inject(MAT_DIALOG_DATA) public data: {order: Order},public dialogRef: MatDialogRef<OrderUpdateComponent>) { }
    formGrup!:FormGroup;
  ngOnInit(): void {
    this.formGrup = this.fb.group({
      tedarikci_adi:[this.data.order.tedarikci_adi, Validators.required],
      kiyafet_adi:[this.data.order.kiyafet_adi, Validators.required],
      adet:[this.data.order.adet, Validators.required],
      beden:[this.data.order.beden, Validators.required],
      siparis_tarihi:[this.data.order.siparis_tarihi, Validators.required],
      sezon:[this.data.order.sezon, Validators.required],
      ozellik:[this.data.order.ozellik, Validators.required],
      birim:[this.data.order.birim, Validators.required],
      fiyat:[this.data.order.fiyat, Validators.required],
      para_birimi:[this.data.order.para_birimi, Validators.required],
      kur:[this.data.order.kur, Validators.required],
      tl_fiyat:[this.data.order.tl_fiyat, Validators.required],
      durum:[this.data.order.durum, Validators.required]
      
    })
    this.readClotheName()
    this.readSupplierName()
    this.readFeaturesName()
  }
  get f() { 
    return this.formGrup.controls; 
  }
  cancel(){
    this.dialogRef.close()
  }
  refresh(){
    window.location.reload(); 

  }
  updateOrder(){
    
    let order = Object.assign(this.formGrup.value, {} as Order)
    // bagis.bagis_id=this.data.bagis.bagis_id
    
    this.connectService.updateOrder(order).subscribe(res => {
      console.log(res)
      
      alert("Başarıyla Güncellendi!")
      this.connectService.getOrder()

    
    })
    
  }
  calculateTl_fiyat(){
    
    this.formGrup.controls['tl_fiyat'].setValue((this.formGrup.value.kur * this.formGrup.value.fiyat))
    console.log(this.formGrup.controls['tl_fiyat'])
   
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
  readClotheName() {
    this.connectService.getClothesName().subscribe((res) => {
      this.clotheName = res
      
      
    });
  }
}
