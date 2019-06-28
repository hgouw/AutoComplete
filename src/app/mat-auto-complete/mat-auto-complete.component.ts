import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-auto-complete',
  templateUrl: './mat-auto-complete.component.html',
  styleUrls: ['./mat-auto-complete.component.css']
})
export class MatAutoCompleteComponent implements OnInit {
  inputText: string;

  constructor() { }

  ngOnInit() {
    this.inputText = '';
  }

}
