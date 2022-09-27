import { Features } from './../../models/features';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConnectDbService } from 'src/app/services/connect-db.service';

@Component({
  selector: 'app-kiyafet-features',
  templateUrl: './kiyafet-features.component.html',
  styleUrls: ['./kiyafet-features.component.scss']
})
export class KiyafetFeaturesComponent implements OnInit {
  features:Features[] = [] 
  dataSource = new MatTableDataSource<Features>(this.features);

  displayedColumns: string[] = ["ozellik_adi"];

  constructor(@Inject(MAT_DIALOG_DATA) public data: {clothes_name: string,clothes_features:string},
  public dialogRef: MatDialogRef<KiyafetFeaturesComponent>,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private router: Router,
    private ngbmodal: NgbModal,
    private connectService: ConnectDbService) { }

  ngOnInit(): void {
    this.readFeatures()
  }
  readFeatures() {
    this.connectService.getFeatures().subscribe((res) => {
      this.features = res[1];
      console.log(this.features)
    });
    
  }
  cancel(){
    this.dialogRef.close();

  }
  // readClotheFeatures(clothes_features:any){
  //   this.connectService.getClotheFeatures(clothes_features).subscribe((res)=>{
  //     this.features = res
  //     console.log(this.features)
  //   })
  // // }
}
