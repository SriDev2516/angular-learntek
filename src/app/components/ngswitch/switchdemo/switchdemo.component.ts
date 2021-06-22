import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchdemo',
  templateUrl: './switchdemo.component.html',
  styleUrls: ['./switchdemo.component.css']
})
export class SwitchdemoComponent implements OnInit {
  dropDownValue = null;
  constructor() { }

  ngOnInit(): void {
  }

  selectHandler($event: any){
    console.log($event.target.value);
    this.dropDownValue = $event.target.value;
  }
}
