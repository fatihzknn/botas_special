import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConnectDbService } from 'src/app/services/connect-db.service';

@Component({
  selector: 'app-kiyafet-features',
  templateUrl: './kiyafet-features.component.html',
  styleUrls: ['./kiyafet-features.component.scss']
})
export class KiyafetFeaturesComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {clothes_name: string},
  public dialogRef: MatDialogRef<KiyafetFeaturesComponent>,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private router: Router,
    private ngbmodal: NgbModal,
    private connectService: ConnectDbService) { }

  ngOnInit(): void {
  }

}
