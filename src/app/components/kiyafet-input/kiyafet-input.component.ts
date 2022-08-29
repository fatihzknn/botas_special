import { Clothes } from './../../models/clothes';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ConnectDbService } from 'src/app/services/connect-db.service';

@Component({
  selector: 'app-kiyafet-input',
  templateUrl: './kiyafet-input.component.html',
  styleUrls: ['./kiyafet-input.component.scss']
})
export class KiyafetInputComponent implements OnInit {

  constructor(private dialog:MatDialog, public dialogRef: MatDialogRef<KiyafetInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {clothe:Clothes}, private fb:FormBuilder, private connectService:ConnectDbService) { }



    formGrup!:FormGroup;

  ngOnInit(): void {
    this.formGrup = this.fb.group({
      kiyafet_adi:['', Validators.required],
      kullanim_suresi:['', Validators.required],
      kiyafet_turu:['', Validators.required],
    })
    
  }
  get f(){
    return this.formGrup.controls;
  }

  saveClothe(){
    if (this.formGrup.valid){
    let clothe = Object.assign(this.formGrup.value, {} as Clothes)
    this.connectService.insertClotheForTable(clothe).subscribe(res => {
      
      alert("Kıyafet Kaydedildi")
    })
    }
    else{
      alert("Tüm boşlukları doldurunuz")
    }

  }
  cancel(){
    this.dialogRef.close();

  }
  
 
}
