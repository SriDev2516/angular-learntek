import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  isValid: boolean;
  name: string;
  email: string;
  
  constructor() { 
    this.isValid = true;
    this.name='';
    this.email = '';
    this.isValid = true;
  }


  ngOnInit(): void {
  }

  isValidHandler() {
    this.isValid = !this.isValid;
  }

  submitHandler(){
      if(this.email !='' && this.name != ''){
      alert("Submitted Successfully!");
      } else {
        this.isValid = false;
      }
  }

}
