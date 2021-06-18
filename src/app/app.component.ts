import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ComponentCommunication';

  Email: string = 'xyz@gmail.com';
  Address: string = 'Adderesss Temporary';

  Result = '';

  getResultFromChild($event: any){
    console.log($event);
    this.Address = $event.address;
    this.Email = $event.email;
    this.Result = $event.result;
  }
}
