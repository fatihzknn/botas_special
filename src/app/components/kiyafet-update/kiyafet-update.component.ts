import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Clothes } from 'src/app/models/clothes';
import { ConnectDbService } from 'src/app/services/connect-db.service';

@Component({
  selector: 'app-kiyafet-update',
  templateUrl: './kiyafet-update.component.html',
  styleUrls: ['./kiyafet-update.component.scss']
})
export class KiyafetUpdateComponent implements OnInit {

  constructor(public dialog: MatDialog, private fb: FormBuilder, private router: Router, private connectService: ConnectDbService
    ,@Inject(MAT_DIALOG_DATA) public data: {clothes: Clothes},public dialogRef: MatDialogRef<KiyafetUpdateComponent>) { }
    formGrup!:FormGroup;

  ngOnInit(): void {
    this.formGrup = this.fb.group({
      kiyafet_no:[this.data.clothes.kiyafet_no, Validators.required],
      kiyafet_adi:[this.data.clothes.kiyafet_adi, Validators.required],
      kullanim_suresi:[this.data.clothes.kullanim_suresi, Validators.required],
      kiyafet_turu:[this.data.clothes.kiyafet_turu, Validators.required]
    })
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
  updateClothes(){
    
    let clothes = Object.assign(this.formGrup.value, {} as Clothes)
    // bagis.bagis_id=this.data.bagis.bagis_id
    
    this.connectService.updateClothesForTable(clothes).subscribe(res => {
      console.log(res)
      
      alert("Başarıyla Güncellendi!")
      this.connectService.getClothesForTable()

    
    })
    
  }
  

}
