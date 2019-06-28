import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mat-auto-complete',
  templateUrl: './mat-auto-complete.component.html',
  styleUrls: ['./mat-auto-complete.component.css']
})
export class MatAutoCompleteComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  constructor() { }

  ngOnInit() {
  }
}
