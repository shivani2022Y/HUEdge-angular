import { Component, Inject, Injectable, NgModule, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
@Injectable()
export class DialogComponent implements OnInit {
  message: string;
  header: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any
  ) {
      this.message = data.message;
      this.header = data.header;
  }

  ngOnInit(): void {
  }

}
