import { ConnectDbService } from './../../services/connect-db.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-table-input',
  templateUrl: './table-input.component.html',
  styleUrls: ['./table-input.component.scss']
})
export class TableInputComponent implements OnInit {
  
  constructor(private dialogRef:MatDialogRef<TableInputComponent>,private fb:FormBuilder, private connectService:ConnectDbService) { }

  sicil_no:[] = []
  formGrup!:FormGroup;
  
  employeeArray:Employee[]=[];
  ngOnInit(): void {
    this.formGrup = this.fb.group({
      sicil_no:['', Validators.required],
      ad_soyad:['', Validators.required],
      unite:['', Validators.required],
      alt_birim:['', Validators.required],
      unvan:['', Validators.required],
      beden:['', Validators.required],
      ayak_no:['', Validators.required],
      kan_grubu:['', Validators.required],
      cinsiyet:['', Validators.required],
      ilk_yardim:['', Validators.required],
    })
  }

  get f(){
    return this.formGrup.controls;
  }

  readEmployee(){
    this.connectService.getEmployees().subscribe((res) => {
      this.employeeArray = res;
    });

  }
  saveEmployee(){
    this.connectService.getSicilNo().subscribe((res) => {
      this.sicil_no = res;
      console.log(this.sicil_no)
      if (this.formGrup.valid){  
        let employee = Object.assign(this.formGrup.value, {} as Employee)
        this.sicil_no.forEach(element => {
          if(element== employee.sicil_no ){
            alert("Aynı Sicil Numarasında kayıt bulunmaktadır.")
          }
        });
        this.connectService.insertEmployee(employee).subscribe(res => {
          console.log(res)
          alert("Çalışan Kaydedildi")
        })
        }
        else{
          alert("Tüm boşlukları doldurunuz")
        }
    });
    
    
    
  }
  refresh(){
    //window.location.reload(); 

  }
  cancel(){
    this.dialogRef.close()
  }

  readSicilNo(){
    this.connectService.getSicilNo().subscribe((res) => {
      this.sicil_no = res[0];
    });
  }
}
