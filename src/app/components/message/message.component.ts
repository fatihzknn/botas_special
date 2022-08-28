import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClothesInputComponent } from '../clothes-input/clothes-input.component';
import { TableInputComponent } from '../table-input/table-input.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: {nameSurname: string}) { 
    
  }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(ClothesInputComponent, {
      width: '527px',
      data: {},
    });
  }
 
}
