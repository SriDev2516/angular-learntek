import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/model/course.model';


@Component({
  selector: 'app-ngfordemo',
  templateUrl: './ngfordemo.component.html',
  styleUrls: ['./ngfordemo.component.css']
})
export class NgfordemoComponent implements OnInit {
  user:string;
  isAdmin: boolean;
  courses: Course[] = [
    {title:'Angular', description:'A programming language',link:'#'},
    {title:'React',  description:'A programming language', link:'#'},
    {title:'Java', description:'A programming language', link:'#'},
    {title:'C#', description:'A programming language', link:'#'},
    {title:'SQL', description:'A programming language', link:'#'},
    {title:'SQL', description:'A programming language', link:'#'}
  ]

  constructor() { 
    this.user = '';
    this.isAdmin = false;
    
  }

  isUserAdmin(){
    this.user == 'admin';
    this.isAdmin = true;
  }

  ngOnInit(): void {
    this.isUserAdmin();
  }

  addCourseFromChild(course: Course){
    console.log(course);
    this.courses.push(course);   
  }

  deleteCourse(course: Course, i: number){
    console.log(course);
    console.log(i);
    this.courses.splice(i, 1);
  }

}
