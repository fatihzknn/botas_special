import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConnectDbService } from 'src/app/services/connect-db.service';
import { FeaturesInputComponent } from '../features-input/features-input.component';


@Component({
  selector: 'app-features-add',
  templateUrl: './features-add.component.html',
  styleUrls: ['./features-add.component.scss']
})
export class FeaturesAddComponent implements OnInit {
  featuresName:any = [];
  constructor(public dialogRef: MatDialogRef<FeaturesAddComponent>,private connectService:ConnectDbService,public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.readFeaturesName()
  }
  readFeaturesName(){
    this.connectService.getFeaturesName().subscribe((res) => {
      this.featuresName = res
      console.log(this.featuresName)
      
      
    });
  } 
  openDialog(){
    this.dialog.open(FeaturesInputComponent,{
      data:{ }
    })
  }
  cancel(){
    this.dialogRef.close();

  }
  
}