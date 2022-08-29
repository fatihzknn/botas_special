import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Clothes } from 'src/app/models/clothes';
import { ConnectDbService } from 'src/app/services/connect-db.service';

@Component({
  selector: 'app-suppliers-input',
  templateUrl: './suppliers-input.component.html',
  styleUrls: ['./suppliers-input.component.scss']
})
export class SuppliersInputComponent implements OnInit {

  constructor(private dialog:MatDialog, public dialogRef: MatDialogRef<SuppliersInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {clothe:Clothes}, private fb:FormBuilder, private connectService:ConnectDbService) { }

    formGrup!:FormGroup;

  ngOnInit(): void {
    this.formGrup = this.fb.group({
      tedarikci_adi:['', Validators.required],
      tedarik_edilen_mal:['', Validators.required],
    })
    
  }

  get f(){
    return this.formGrup.controls;
  }

  saveSupplier(){
    if (this.formGrup.valid){
    let supplier = Object.assign(this.formGrup.value, {} as Clothes)
    this.connectService.insertSupplier(supplier).subscribe(res => {
      
      alert("Tedarikçi Kaydedildi")
      this.refresh()

    })
    }
    else{
      alert("Tüm boşlukları doldurunuz")
    }
  }
  
  cancel(){
    this.dialog.closeAll()
  }

  refresh(){
    this.dialog.closeAll();
    window.location.reload()
  }

}