import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {
  isValid = true;
  constructor() { }

  ngOnInit(): void {
  }

  applyStyles(){
     let cssStyles = {
       'color': 'red',
       'font-size': '20px'
     }

     return cssStyles;
  }

  btnClickHandler(){
    this.isValid = !this.isValid;
  }
}
