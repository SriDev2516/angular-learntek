import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() email: any;
  @Input() address: any;
  @Output() studentResult: EventEmitter<any> = new EventEmitter<any>();

  Name = 'Peter';
  Age = 23;
  Result = 'Passed';  
  Gender = 'Male';
  
  obj: {result: string, address: string, email: string};

  constructor() {
     this.obj = {result:'', address:'', email:''};
  }

  ngOnInit(): void {
  }

  changePropertiesHandler() {
    this.email = 'abc@hotmail.com';
    this.address = 'New Address';
    this.Result = 'Passed';

    this.obj.address = this.address;
    this.obj.email = this.email;
    this.obj.result = this.Result;
  }

  passResult() {
    this.studentResult.emit(this.obj);
  }

}
