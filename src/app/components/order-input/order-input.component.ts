import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-order-input',
  templateUrl: './order-input.component.html',
  styleUrls: ['./order-input.component.scss']
})
export class OrderInputComponent implements OnInit {
  displayedColumns=[]
  constructor(public dialogRef: MatDialogRef<OrderInputComponent>) { }

  ngOnInit(): void {
  }
  cancel(){
    this.dialogRef.close()
  }
}
