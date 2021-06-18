import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { FormsModule } from '@angular/forms';
import { NgfordemoComponent } from './components/ngfordemo/ngfordemo.component';
import { AddCourseComponent } from './components/ngfordemo/addcourse.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    DirectivesComponent,
    NgfordemoComponent,
    AddCourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [NgfordemoComponent]
})
export class AppModule { }
