import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Features } from 'src/app/models/features';
import { ConnectDbService } from 'src/app/services/connect-db.service';
import { ClothesTableComponent } from '../clothes-table/clothes-table.component';
import { FeaturesAddComponent } from '../features-add/features-add.component';
import { KiyafetFeaturesComponent } from '../kiyafet-features/kiyafet-features.component';
import { KiyafetTableComponent } from '../kiyafet-table/kiyafet-table.component';

@Component({
  selector: 'app-features-input',
  templateUrl: './features-input.component.html',
  styleUrls: ['./features-input.component.scss']
})
export class FeaturesInputComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FeaturesInputComponent>,private fb:FormBuilder,private connectService:ConnectDbService,public dialog: MatDialog) { }
  formGrup!:FormGroup;
  ngOnInit(): void {
    this.formGrup = this.fb.group({
      ozellik_adi:['', Validators.required]
     
    })
  }
  get f(){
    return this.formGrup.controls;
  }
  cancel(){
    this.dialogRef.close();

  }
  addFeatures(){
    if (this.formGrup.valid){
      let features = Object.assign(this.formGrup.value, {} as Features)
      this.connectService.insertFeatures(features).subscribe(res => {
        
        alert("Kıyafet Kaydedildi")
        this.dialog.closeAll()
        this.openDialog()
      })
      }
      else{
        alert("Tüm boşlukları doldurunuz")
      }
  
  }
  openDialog(){
    this.dialog.open(FeaturesAddComponent,{
      data:{ },
      width:"758px",
      height:"758px"

    })
  }
}
