import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-kiyafet-features-input',
  templateUrl: './kiyafet-features-input.component.html',
  styleUrls: ['./kiyafet-features-input.component.scss']
})
export class KiyafetFeaturesInputComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<KiyafetFeaturesInputComponent>) { }
  formGrup!:FormGroup;
  ngOnInit(): void {
  }

  cancel(){
    this.dialogRef.close();

  }
}
